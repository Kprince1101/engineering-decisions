import { DemoBlock } from '@/components/demo/DemoBlock';
import { SandpackEditor } from '@/components/demo/SandpackEditor';
import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function ChakraComponents() {
  return (
    <ContentContainer>
      <SectionBlock title="Chakra UI: Components">
        <SubsectionBlock heading="Buttons & Interactive Elements">
          <p>
            <strong>Prebuilt variants with theme integration:</strong> Chakra's Button component ships with
            several variants (<code>solid</code>, <code>outline</code>, <code>ghost</code>, <code>link</code>)
            that pull styling from your theme provider. Colors are referenced via theme tokens
            (<code>colorScheme="blue"</code>), ensuring consistency across your application without manual
            class management.
          </p>
          <p>
            <strong>Loading and disabled states:</strong> Loading states are built in via the <code>isLoading</code>
            prop, which automatically displays a spinner and disables interaction. Disabled states respect theme
            tokens for opacity and cursor behavior. These patterns are accessible by default—focus indicators,
            ARIA attributes, and keyboard navigation work out of the box.
          </p>
          <p>
            <strong>Style props vs CSS ownership:</strong> Instead of writing CSS or Tailwind classes, you pass
            style props directly to components (<code>bg="blue.500"</code>, <code>p={'{'}{4}{'}'}</code>, <code>_hover={'{{'}bg: "blue.600"{'}}'}</code>).
            This feels natural in JSX but introduces runtime CSS-in-JS overhead. You're not owning CSS files—you're
            configuring components through props that Chakra converts to styles at runtime.
          </p>
          <p>
            <strong>Accessibility defaults:</strong> Focus management, keyboard navigation, and ARIA labeling are
            handled automatically. Buttons are properly announced to screen readers, focus indicators follow WCAG
            guidelines, and hover/active states are distinguishable. This is a significant time saver for teams
            without dedicated accessibility expertise, but you're working within Chakra's accessibility model.
          </p>
          <DemoBlock title="Button Variants (Theme-Driven)">
            <SandpackEditor
              code={`import React from 'react';
import { ChakraProvider, Button, VStack, HStack, Heading, Text } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <VStack spacing={6} align="stretch" p={6}>
        <div>
          <Heading size="md" mb={3}>Variant Examples</Heading>
          <HStack spacing={3}>
            {/* Theme controls variants - colorScheme pulls from Chakra's theme */}
            {/* No CSS files, no Tailwind classes - just theme tokens */}
            <Button colorScheme="blue">Solid (Default)</Button>
            <Button variant="outline" colorScheme="blue">Outline</Button>
            <Button variant="ghost" colorScheme="blue">Ghost</Button>
            <Button variant="link" colorScheme="blue">Link</Button>
          </HStack>
        </div>

        <div>
          <Heading size="md" mb={3}>Color Schemes</Heading>
          <HStack spacing={3}>
            {/* Theme tokens ensure consistency without manual color management */}
            <Button colorScheme="blue">Blue</Button>
            <Button colorScheme="green">Green</Button>
            <Button colorScheme="red">Red</Button>
            <Button colorScheme="purple">Purple</Button>
          </HStack>
        </div>

        <div>
          <Heading size="md" mb={3}>States</Heading>
          <HStack spacing={3}>
            {/* Loading state is built-in - spinner and disabled behavior automatic */}
            <Button colorScheme="blue" isLoading>
              Loading
            </Button>
            
            {/* Loading with custom text while spinner shows */}
            <Button colorScheme="blue" isLoading loadingText="Submitting">
              Submit
            </Button>
            
            {/* Disabled state respects theme tokens for opacity/cursor */}
            <Button colorScheme="blue" isDisabled>
              Disabled
            </Button>
          </HStack>
        </div>

        <div>
          <Heading size="md" mb={3}>Sizes</Heading>
          <HStack spacing={3} align="center">
            {/* Size variants from theme - no manual padding calculations */}
            <Button size="xs" colorScheme="blue">Extra Small</Button>
            <Button size="sm" colorScheme="blue">Small</Button>
            <Button size="md" colorScheme="blue">Medium</Button>
            <Button size="lg" colorScheme="blue">Large</Button>
          </HStack>
        </div>

        <div>
          <Text fontSize="sm" color="gray.600" p={4} bg="gray.50" borderRadius="md">
            <strong>Key Observations:</strong>
            <br />• Accessibility is automatic: focus indicators, ARIA attributes, keyboard nav
            <br />• Theme controls all variants - no CSS files to maintain
            <br />• Styling happens at runtime via CSS-in-JS (Emotion)
            <br />• No markup ownership - you configure, Chakra renders
            <br />• Convenient but abstracted - customization via props, not code
          </Text>
        </div>
      </VStack>
    </ChakraProvider>
  );
}`}
              dependencies={{
                'react': '^18.0.0',
                'react-dom': '^18.0.0',
                '@chakra-ui/react': '^2.8.2',
                '@emotion/react': '^11.11.1',
                '@emotion/styled': '^11.11.0',
                'framer-motion': '^10.16.4',
              }}
            />
          </DemoBlock>

          <h3>Form Inputs & Validation</h3>
          <p>
            <strong>Integrated form components:</strong> Chakra provides <code>FormControl</code>, <code>FormLabel</code>,
            <code>FormErrorMessage</code>, and <code>FormHelperText</code> components that wire accessibility
            attributes automatically. When you mark a FormControl as <code>isInvalid</code>, error messages gain
            proper ARIA relationships without manual <code>aria-describedby</code> wiring.
          </p>
          <p>
            <strong>Built-in error handling patterns:</strong> Error states cascade through the FormControl context.
            Inputs automatically receive <code>aria-invalid</code> attributes, labels gain appropriate IDs, and error
            messages are properly announced to assistive technology. This reduces boilerplate significantly compared
            to manually managing ARIA relationships.
          </p>
          <p>
            <strong>Integration with form libraries:</strong> Chakra components integrate cleanly with React Hook Form,
            Formik, and other validation libraries through standard props. You register inputs, pass validation state
            to <code>isInvalid</code>, and render error messages conditionally. The accessibility wiring remains
            automatic, but validation logic is yours to implement.
          </p>
          <p>
            <strong>Accessibility handled by components:</strong> Input components include proper label associations,
            focus indicators, and placeholder handling. Select components support keyboard navigation and screen reader
            announcements. Checkbox and Radio groups manage focus and ARIA attributes for group semantics. Teams avoid
            common accessibility pitfalls because the components enforce correct patterns.
          </p>
          <DemoBlock title="Form Validation (Automatic Accessibility Wiring)">
            <SandpackEditor
              code={`import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  VStack,
  Text,
  Box,
} from '@chakra-ui/react';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <ChakraProvider>
      <Box p={6} maxW="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align="stretch">
            {/* FormControl manages ARIA relationships automatically */}
            {/* No manual aria-invalid, aria-describedby, or id wiring */}
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Enter your name"
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
              />
              {/* FormErrorMessage automatically gets proper ARIA relationships */}
              {/* Screen readers announce this when the field is invalid */}
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {/* Accessibility wiring is automatic: */}
              {/* - Input gets aria-invalid when isInvalid is true */}
              {/* - Error message gets linked via aria-describedby */}
              {/* - Label gets proper for/id association */}
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
              loadingText="Submitting"
            >
              Submit
            </Button>

            <Text fontSize="sm" color="gray.600" p={3} bg="gray.50" borderRadius="md">
              <strong>What Chakra handles automatically:</strong>
              <br />• aria-invalid on inputs when isInvalid is true
              <br />• aria-describedby linking errors to inputs
              <br />• Proper label-input associations
              <br />• Focus indicators and keyboard navigation
              <br />• Error message visibility management
              <br /><br />
              <strong>What you handle:</strong>
              <br />• Validation logic (React Hook Form)
              <br />• Error messages and conditions
              <br />• Submit behavior
              <br /><br />
              You focus on validation logic, not ARIA markup.
            </Text>
          </VStack>
        </form>
      </Box>
    </ChakraProvider>
  );
}`}
              dependencies={{
                'react': '^18.0.0',
                'react-dom': '^18.0.0',
                '@chakra-ui/react': '^2.8.2',
                '@emotion/react': '^11.11.1',
                '@emotion/styled': '^11.11.0',
                'framer-motion': '^10.16.4',
                'react-hook-form': '^7.51.0',
              }}
            />
          </DemoBlock>
        </SubsectionBlock>

        <SubsectionBlock heading="Dialogs & Overlays">
          <p>
            <strong>Modal and Drawer components:</strong> Chakra provides <code>Modal</code>, <code>Drawer</code>,
            <code>Popover</code>, and <code>AlertDialog</code> components with accessibility handled automatically.
            Focus is trapped within the overlay, ESC key closes the modal, and scroll locking prevents background
            interaction. You compose content using sub-components (<code>ModalHeader</code>, <code>ModalBody</code>,
            <code>ModalFooter</code>), but the overlay mechanics are abstracted.
          </p>
          <p>
            <strong>Focus trapping and scroll locking:</strong> When a Modal opens, focus moves to the first interactive
            element inside. Tabbing is constrained to the modal content. Background scrolling is disabled. When the
            modal closes, focus returns to the trigger element. This behavior is automatic and follows ARIA Authoring
            Practices Guide patterns without configuration.
          </p>
          <p>
            <strong>Controlled vs uncontrolled patterns:</strong> Modals support both controlled state (<code>isOpen</code>
            and <code>onClose</code> props) and uncontrolled usage via <code>useDisclosure</code> hook. The hook provides
            <code>isOpen</code>, <code>onOpen</code>, and <code>onClose</code> utilities, reducing boilerplate for
            simple cases. For complex flows, you manage state yourself and pass it to the Modal.
          </p>
          <p>
            <strong>Abstraction convenience vs customization limits:</strong> Chakra's overlay components are highly
            abstracted. You configure behavior through props (<code>size</code>, <code>isCentered</code>,
            <code>scrollBehavior</code>), but you're not controlling the underlying DOM structure or animation
            implementation. Custom animations require working within Chakra's motion integration, and non-standard
            layouts may require workarounds. The tradeoff is rapid implementation with guardrails vs full control
            over markup and behavior.
          </p>
          <DemoBlock title="Modal (Automatic Focus & Scroll Management)">
            <SandpackEditor
              code={`import React from 'react';
import {
  ChakraProvider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function App() {
  // useDisclosure hook provides isOpen, onOpen, onClose
  // Reduces boilerplate for common modal state management
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <VStack spacing={4} p={6}>
        <Button onClick={onOpen} colorScheme="blue">
          Open Modal
        </Button>

        {/* Focus trapping is automatic - no manual focus management */}
        {/* Scroll locking is automatic - background scroll disabled when open */}
        {/* ESC key closes modal automatically */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          
          {/* Layout is constrained by component structure */}
          {/* You compose via ModalHeader/Body/Footer, not arbitrary markup */}
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            
            {/* Close button with accessibility handled automatically */}
            <ModalCloseButton />
            
            <ModalBody>
              <Text mb={3}>
                When this modal opens:
              </Text>
              <Text fontSize="sm" mb={2}>
                • Focus automatically moves to the first interactive element
              </Text>
              <Text fontSize="sm" mb={2}>
                • Tab key is trapped within the modal content
              </Text>
              <Text fontSize="sm" mb={2}>
                • Background scrolling is disabled (scroll locking)
              </Text>
              <Text fontSize="sm" mb={2}>
                • ESC key closes the modal
              </Text>
              <Text fontSize="sm" mb={2}>
                • Clicking backdrop closes the modal (configurable)
              </Text>
              <Text fontSize="sm" mb={3}>
                • When closed, focus returns to trigger button
              </Text>
              
              <Text fontSize="sm" color="gray.600" p={3} bg="gray.50" borderRadius="md">
                <strong>What Chakra handles:</strong>
                <br />• Focus trapping and restoration
                <br />• Scroll lock on background
                <br />• ESC key and backdrop click behavior
                <br />• ARIA attributes (role, aria-modal, aria-labelledby)
                <br />• Animations and transitions
                <br /><br />
                <strong>What you configure:</strong>
                <br />• Size via size prop (xs, sm, md, lg, xl, full)
                <br />• Centering via isCentered prop
                <br />• Close behavior via closeOnOverlayClick prop
                <br />• Content via composition (Header/Body/Footer)
                <br /><br />
                Customization happens via props, not composition.
                Layout follows Chakra's structure.
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  alert('Action confirmed!');
                  onClose();
                }}
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Text fontSize="sm" color="gray.600" maxW="md" textAlign="center">
          Try opening the modal and pressing Tab to see focus trapping.
          Press ESC or click the backdrop to close.
        </Text>
      </VStack>
    </ChakraProvider>
  );
}`}
              dependencies={{
                'react': '^18.0.0',
                'react-dom': '^18.0.0',
                '@chakra-ui/react': '^2.8.2',
                '@emotion/react': '^11.11.1',
                '@emotion/styled': '^11.11.0',
                'framer-motion': '^10.16.4',
              }}
            />
          </DemoBlock>
        </SubsectionBlock>

        <SubsectionBlock heading="Notifications & Feedback">
          <p>
            <strong>Built-in Toast system:</strong> Chakra includes a global toast notification system via the
            <code>useToast</code> hook. You call <code>toast({'{'}{'{'}title, description, status{'}'}{'}'})</code> to show
            notifications from anywhere in your component tree. The system handles positioning, stacking,
            auto-dismiss timing, and animations without additional setup.
          </p>
          <p>
            <strong>Global notification patterns:</strong> Toasts are managed by a global provider
            (<code>ChakraProvider</code>), so you don't wire context or state yourself. Call <code>useToast()</code>,
            invoke the returned function, and notifications appear. This is convenient for common cases but less
            flexible for custom notification layouts or non-standard positioning requirements.
          </p>
          <p>
            <strong>Ease of use vs customization depth:</strong> The toast API is ergonomic—status variants
            (<code>success</code>, <code>error</code>, <code>warning</code>, <code>info</code>) have automatic
            colors and icons. Duration, position, and render function are configurable, but you're working within
            Chakra's toast component structure. Custom notification designs (e.g., inline banners, persistent alerts)
            require building separate components; the toast system doesn't extend to these patterns.
          </p>
          <p>
            <strong>Runtime behavior and ergonomics:</strong> Toasts are rendered via React portals and styled with
            Chakra's CSS-in-JS system. This means runtime overhead for notification rendering, but it also means
            toasts respect your theme automatically. Accessibility is handled—toasts have proper ARIA live regions
            for screen reader announcements. The system is productive for standard use cases, but custom feedback
            patterns may require stepping outside the toast abstraction entirely.
          </p>
          <DemoBlock title="Toast System (Global Notification API)">
            <SandpackEditor
              code={`import React from 'react';
import {
  ChakraProvider,
  Button,
  useToast,
  VStack,
  HStack,
  Text,
  Box,
} from '@chakra-ui/react';

export default function App() {
  // Global toast system provided by ChakraProvider
  // No context wiring, no state management - just call the hook
  const toast = useToast();

  // Accessibility handled by Chakra - ARIA live regions automatic
  const showSuccessToast = () => {
    toast({
      title: 'Success!',
      description: 'Your changes have been saved.',
      status: 'success', // Automatic colors and icons
      duration: 3000,
      isClosable: true,
      position: 'top-right', // Customization via options
    });
  };

  const showErrorToast = () => {
    toast({
      title: 'Error occurred',
      description: 'Unable to process your request.',
      status: 'error', // Status variants have preset styling
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const showWarningToast = () => {
    toast({
      title: 'Warning',
      description: 'This action cannot be undone.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const showInfoToast = () => {
    toast({
      title: 'Info',
      description: 'New features available in settings.',
      status: 'info',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  // Multiple toasts stack automatically
  const showMultipleToasts = () => {
    toast({ title: 'First toast', status: 'info', duration: 5000 });
    setTimeout(() => {
      toast({ title: 'Second toast', status: 'success', duration: 5000 });
    }, 500);
    setTimeout(() => {
      toast({ title: 'Third toast', status: 'warning', duration: 5000 });
    }, 1000);
  };

  return (
    <ChakraProvider>
      <VStack spacing={6} p={6} align="stretch">
        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb={3}>
            Toast Status Variants
          </Text>
          <HStack spacing={3}>
            <Button onClick={showSuccessToast} colorScheme="green" size="sm">
              Success Toast
            </Button>
            <Button onClick={showErrorToast} colorScheme="red" size="sm">
              Error Toast
            </Button>
            <Button onClick={showWarningToast} colorScheme="orange" size="sm">
              Warning Toast
            </Button>
            <Button onClick={showInfoToast} colorScheme="blue" size="sm">
              Info Toast
            </Button>
          </HStack>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb={3}>
            Stacking Behavior
          </Text>
          <Button onClick={showMultipleToasts} colorScheme="purple" size="sm">
            Show Multiple Toasts
          </Button>
        </Box>

        <Box p={4} bg="gray.50" borderRadius="md">
          <Text fontSize="sm" fontWeight="semibold" mb={2}>
            What Chakra Handles Automatically:
          </Text>
          <Text fontSize="sm" mb={1}>
            • Global toast system via useToast hook
          </Text>
          <Text fontSize="sm" mb={1}>
            • Positioning, stacking, and animations
          </Text>
          <Text fontSize="sm" mb={1}>
            • Auto-dismiss timing (configurable)
          </Text>
          <Text fontSize="sm" mb={1}>
            • ARIA live regions for screen readers
          </Text>
          <Text fontSize="sm" mb={1}>
            • Status-based colors and icons
          </Text>
          <Text fontSize="sm" mb={1}>
            • Portal rendering (outside component tree)
          </Text>
          <Text fontSize="sm" mt={3} mb={2} fontWeight="semibold">
            How You Customize:
          </Text>
          <Text fontSize="sm" mb={1}>
            • Status: success, error, warning, info, loading
          </Text>
          <Text fontSize="sm" mb={1}>
            • Position: top, top-right, bottom, bottom-left, etc.
          </Text>
          <Text fontSize="sm" mb={1}>
            • Duration: milliseconds or null for persistent
          </Text>
          <Text fontSize="sm" mb={1}>
            • isClosable: manual dismiss button
          </Text>
          <Text fontSize="sm" mt={3} color="gray.600">
            Customization via options, not markup. Runtime abstraction for
            feedback UX. No manual timers, no custom containers.
          </Text>
        </Box>
      </VStack>
    </ChakraProvider>
  );
}`}
              dependencies={{
                'react': '^18.0.0',
                'react-dom': '^18.0.0',
                '@chakra-ui/react': '^2.8.2',
                '@emotion/react': '^11.11.1',
                '@emotion/styled': '^11.11.0',
                'framer-motion': '^10.16.4',
              }}
            />
          </DemoBlock>
        </SubsectionBlock>
      </SectionBlock>
    </ContentContainer>
  );
}
