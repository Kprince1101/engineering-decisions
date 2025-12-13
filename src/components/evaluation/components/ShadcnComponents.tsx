import { DemoBlock } from '@/components/demo/DemoBlock';
import { SandpackEditor } from '@/components/demo/SandpackEditor';
import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function ShadcnComponents() {
    return (
        <ContentContainer>
            <SectionBlock title="Components">
                <p>
                    This section examines how shadcn/ui components are structured, what you're responsible for maintaining,
                    and how this ownership model differs from abstraction-heavy libraries.
                </p>

                <SubsectionBlock heading="Buttons & Interactive Elements">
                    <p>
                        <strong>What you get:</strong> A Button component built on headless primitives, styled with Tailwind utilities.
                        The component lives in your codebase (<code>components/ui/button.tsx</code>) and uses class-variance-authority
                        for variant logic. You own the file completely.
                    </p>
                    <p>
                        <strong>Your responsibility:</strong> All variants (primary, secondary, outline, ghost), size options, and
                        state styles (hover, focus, active, disabled) are defined in Tailwind classes you maintain. Want a new variant?
                        Add it to the cva config. Want custom hover behavior? Modify the Tailwind classes. There's no abstraction to
                        work around—just code you control.
                    </p>
                    <p>
                        <strong>Flexibility vs verbosity:</strong> You have complete control over markup and styling. The tradeoff
                        is explicitness. Loading states, icon positioning, and polymorphic rendering aren't built in—you add them
                        if needed. This is intentional. You build exactly what your design system requires, no more, no less.
                    </p>
                    <DemoBlock title="Button Variants (Owned Code)">
                        <SandpackEditor
                            code={`import React from 'react';
import './styles.css';

// You own this Button component - it lives in your codebase
// All variants, styles, and states are YOUR responsibility
function Button({ variant = 'primary', disabled = false, children, ...props }) {
  // You define variant classes - no magic, no provider
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  // You own the disabled state styling
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  // You compose the className string yourself
  const className = \`
    px-4 py-2 rounded-md font-medium transition-colors
    \${variantClasses[variant] || variantClasses.primary}
    \${disabled ? disabledClasses : ''}
  \`.trim();

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div className="p-4 space-y-3">
      {/* You own these variants - want more? Add them yourself */}
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button disabled>Disabled Button</Button>
      
      {/* Want loading state? Add it yourself. Want icons? Add them yourself. */}
      {/* This is YOUR component. No abstraction to fight. */}
    </div>
  );
}`}
                            dependencies={{
                                'react': '^18.0.0',
                                'react-dom': '^18.0.0',
                            }}
                        />
                    </DemoBlock>
                </SubsectionBlock>

                <SubsectionBlock heading="Form Inputs & Validation">
                    <p>
                        <strong>What you get:</strong> Input primitives (Input, Textarea, Select) with basic markup and Tailwind styling.
                        These are building blocks, not form solutions. There's no built-in validation, error handling, or form state
                        management. That's your job.
                    </p>
                    <p>
                        <strong>Integration pattern:</strong> shadcn/ui components integrate with React Hook Form, Formik, or any
                        form library through standard props (<code>value</code>, <code>onChange</code>, <code>onBlur</code>). Error
                        states are wired manually—you pass error messages and conditional styling. This is more verbose than libraries
                        with built-in form utilities, but it's also more explicit and adaptable.
                    </p>
                    <p>
                        <strong>Explicit control:</strong> You control the entire markup tree. Label positioning, error message
                        placement, help text, required indicators—all of this is in code you own. Accessibility is your responsibility.
                        Radix provides primitives for complex inputs (Select, RadioGroup), but wiring them into forms is manual work.
                    </p>
                    <p>
                        <strong>What this means:</strong> Teams comfortable with React Hook Form or similar tools will find this
                        familiar. Teams expecting a batteries-included form solution will find this tedious. There's no useForm hook,
                        no automatic validation—just components you compose yourself.
                    </p>
                    <DemoBlock title="Form Input Validation (Manual Wiring)">
                        <SandpackEditor
                            code={`import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

export default function App() {
  // You wire validation yourself - nothing is automatic
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    alert('Form submitted: ' + JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 max-w-md">
      {/* You own the entire markup tree - label, input, error */}
      <div>
        <label 
          htmlFor="name" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          // You manually wire aria-invalid and aria-describedby
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={\`
            w-full px-3 py-2 border rounded-md
            \${errors.name ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring-2 focus:ring-blue-500
          \`}
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
          })}
        />
        {/* You manually render errors - no magic, just conditional JSX */}
        {errors.name && (
          <p id="name-error" className="text-red-600 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label 
          htmlFor="email" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          // You own accessibility - aria attributes are YOUR responsibility
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={\`
            w-full px-3 py-2 border rounded-md
            \${errors.email ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring-2 focus:ring-blue-500
          \`}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <p id="email-error" className="text-red-600 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Submit
      </button>

      {/* Nothing is automatic. You build every piece of UX yourself. */}
    </form>
  );
}`}
                            dependencies={{
                                'react': '^18.0.0',
                                'react-dom': '^18.0.0',
                                'react-hook-form': '^7.51.0',
                            }}
                        />
                    </DemoBlock>
                </SubsectionBlock>

                <SubsectionBlock heading="Dialogs, Sheets & Overlays">
                    <p>
                        <strong>What you get:</strong> A Dialog component built on Radix's Dialog primitive. Radix handles focus
                        trapping, ESC key behavior, and ARIA attributes. You handle layout, animation, and styling via Tailwind.
                    </p>
                    <p>
                        <strong>Composition-first construction:</strong> Dialogs in shadcn/ui are composed from sub-components:
                        DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter. You arrange these
                        however your design requires. Want a centered modal? Configure Tailwind classes. Want a slide-in sheet?
                        Adjust positioning and add transitions. The structure is yours.
                    </p>
                    <p>
                        <strong>Power and verbosity:</strong> This composition model is powerful but verbose. Opening a modal requires
                        managing <code>open</code> state yourself. Animations are CSS transitions you define. Backdrop styling is
                        Tailwind classes you control. There's no <code>Modal.show()</code> API—you build the behavior you need.
                    </p>
                    <p>
                        <strong>Intentionality over convenience:</strong> Every choice is explicit. This makes the code longer but
                        also more maintainable. When you need to debug focus behavior or adjust animation timing, you're editing
                        code you understand, not configuring props on a black-box component.
                    </p>
                    <DemoBlock title="Dialog Composition (Radix + Owned Styling)">
                        <SandpackEditor
                            code={`import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';

export default function App() {
  // You manage open/close state yourself - no modal.show() magic
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        {/* Radix handles accessibility, you own the UI */}
        <Dialog.Trigger asChild>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Open Dialog
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          {/* You own the overlay - Radix just provides the container */}
          <Dialog.Overlay 
            className="fixed inset-0 bg-black/50"
            style={{ animation: 'fadeIn 200ms' }}
          />
          
          {/* You compose layout, styles, and animation yourself */}
          <Dialog.Content
            className="fixed top-1/2 left-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-xl"
            style={{ 
              transform: 'translate(-50%, -50%)',
              animation: 'slideIn 200ms'
            }}
          >
            {/* Radix gives accessibility primitives (focus trap, ESC key, ARIA) */}
            {/* You give everything else - layout, spacing, typography */}
            
            <Dialog.Title className="text-xl font-semibold mb-2">
              Example Dialog
            </Dialog.Title>
            
            <Dialog.Description className="text-gray-600 mb-4">
              This dialog is composed from Radix primitives. Radix handles
              focus trapping, keyboard navigation, and ARIA attributes.
              You own the layout, styling, and animation.
            </Dialog.Description>

            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                • Press ESC to close (Radix handles this)
              </p>
              <p className="text-sm text-gray-700">
                • Click backdrop to close (you wire this via onOpenChange)
              </p>
              <p className="text-sm text-gray-700">
                • Focus is trapped (Radix handles this)
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Dialog.Close asChild>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  Cancel
                </button>
              </Dialog.Close>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => {
                  alert('Action confirmed!');
                  setOpen(false);
                }}
              >
                Confirm
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* You own escape hatches and edge cases. Want a nested dialog? */}
      {/* Want custom animations? Want different positioning? You build it. */}
      
      <style>{\`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translate(-50%, -48%) scale(0.96); }
          to { transform: translate(-50%, -50%) scale(1); }
        }
      \`}</style>
    </div>
  );
}`}
                            dependencies={{
                                'react': '^18.0.0',
                                'react-dom': '^18.0.0',
                                '@radix-ui/react-dialog': '^1.0.5',
                            }}
                        />
                    </DemoBlock>
                </SubsectionBlock>

                <SubsectionBlock heading="Notifications & Feedback">
                    <p>
                        <strong>What you don't get:</strong> shadcn/ui does not ship a global notification system. There's no
                        <code>notifications.show()</code> or toast provider. This is intentional. Notifications are app-specific
                        UI with unique positioning, stacking, and timing requirements. shadcn/ui gives you the primitives; you
                        build the pattern.
                    </p>
                    <p>
                        <strong>Common implementation pattern:</strong> Teams typically create a Toast component using Radix's
                        Toast primitive, wire it to a context provider, and expose an imperative API. This is 50-150 lines of
                        code depending on requirements. You own it, maintain it, and evolve it with your app.
                    </p>
                    <p>
                        <strong>Tradeoff between control and convenience:</strong> Libraries with built-in notification systems
                        save you this work but lock you into their API and styling decisions. shadcn/ui assumes you prefer control.
                        If you need notifications, you build them. If you don't, you avoid the bundle weight.
                    </p>
                    <p>
                        <strong>App-specific feedback patterns:</strong> This approach encourages teams to design feedback mechanisms
                        that fit their product. Inline alerts, banner notifications, toast stacks—whatever your design requires, you
                        implement it directly. No abstraction to route around.
                    </p>
                    <DemoBlock title="Custom Toast System (No Built-in Notification API)">
                        <SandpackEditor
                            code={`import React, { useState } from 'react';
import './styles.css';

// There is no built-in global notification system in shadcn/ui
// You compose one yourself - this is a minimal example showing the pattern

let notificationId = 0;

export default function App() {
  // You own state: array of notifications, each with id, message, type
  const [notifications, setNotifications] = useState([]);

  // You own behavior: add notification to state
  const addNotification = (message, type = 'info') => {
    const id = notificationId++;
    setNotifications(prev => [...prev, { id, message, type }]);
    
    // You own timing: auto-dismiss after 3 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  // You own dismissal: manual close
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="p-4">
      <div className="space-x-2 mb-4">
        <button
          onClick={() => addNotification('Operation successful!', 'success')}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Success Toast
        </button>
        <button
          onClick={() => addNotification('Something went wrong', 'error')}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Error Toast
        </button>
        <button
          onClick={() => addNotification('Processing your request...', 'info')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Info Toast
        </button>
      </div>

      {/* You own rendering: position, stacking, layout, animations */}
      <div className="fixed top-4 right-4 space-y-2 w-80">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={\`p-4 rounded-lg shadow-lg text-white flex justify-between items-start \${
              notification.type === 'success' ? 'bg-green-600' :
              notification.type === 'error' ? 'bg-red-600' :
              'bg-blue-600'
            }\`}
            style={{ animation: 'slideInRight 200ms ease-out' }}
          >
            <div>
              <p className="font-medium">
                {notification.type === 'success' ? '✓ ' : 
                 notification.type === 'error' ? '✕ ' : 'ℹ '}
                {notification.message}
              </p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="ml-4 text-white/80 hover:text-white"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <p className="text-sm font-medium text-gray-900 mb-2">
          Implementation Notes:
        </p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• No global notification API - you build state management yourself</li>
          <li>• You own timing, positioning, stacking behavior, and animations</li>
          <li>• This pattern scales in complexity with app requirements</li>
          <li>• Production apps often wrap this in Context + custom hook</li>
          <li>• Accessibility (ARIA live regions) is your responsibility</li>
        </ul>
      </div>

      <style>{\`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      \`}</style>
    </div>
  );
}`}
                            dependencies={{
                                'react': '^18.0.0',
                                'react-dom': '^18.0.0',
                            }}
                        />
                    </DemoBlock>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}
