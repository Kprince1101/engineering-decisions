import { DemoBlock } from '@/components/demo/DemoBlock';
import { SandpackEditor } from '@/components/demo/SandpackEditor';
import { ContentContainer, SectionBlock, SubsectionBlock, CriteriaGrid, CriteriaItem } from '@/components/content';

export function MantineComponents() {
  return (
    <ContentContainer>
      <SectionBlock title="Mantine: Components">
        <SubsectionBlock heading="Buttons">
          <CriteriaGrid>
            <CriteriaItem label="What matters">
              <p>
                Variant flexibility (primary, secondary, outline, ghost),
                loading states that prevent double-submission, disabled states that communicate why,
                and size variants that work across contexts.
              </p>
            </CriteriaItem>
            <CriteriaItem label="Mantine's approach">
              <p>
                Provides a comprehensive Button component with
                built-in variants, loading states, and polymorphic rendering. Supports left/right icons,
                compact sizing, and gradient fills. Loading state is managed via a single prop with
                built-in spinner integration.
              </p>
            </CriteriaItem>
          </CriteriaGrid>
          <DemoBlock title="Button Variants">
            <SandpackEditor
              code={`import { MantineProvider, Button, Stack } from '@mantine/core';
import '@mantine/core/styles.css';

export default function App() {
  return (
    <MantineProvider>
      <Stack p="md" gap="md">
        <Button>Primary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="subtle">Subtle Button</Button>
        <Button loading>Loading Button</Button>
        <Button disabled>Disabled Button</Button>
      </Stack>
    </MantineProvider>
  );
}`}
              dependencies={{
                '@mantine/core': '^7.14.4',
                '@mantine/hooks': '^7.14.4',
              }}
            />
          </DemoBlock>
        </SubsectionBlock>

        <SubsectionBlock heading="Form Inputs">
          <CriteriaGrid>
            <CriteriaItem label="What matters">
              <p>
                Consistent validation patterns, clear error states,
                accessibility labels, support for controlled/uncontrolled modes, and composability
                with form libraries like React Hook Form.
              </p>
            </CriteriaItem>
            <CriteriaItem label="Mantine's approach">
              <p>
                All inputs share a common API surface (TextInput,
                NumberInput, Select, etc.). Built-in error prop, description text, required indicator,
                and icon support. Integrates well with form libraries through standard onChange/value patterns.
                Provides useForm hook for simple cases.
              </p>
            </CriteriaItem>
          </CriteriaGrid>
          <DemoBlock title="Form Input Validation">
            <SandpackEditor
              code={`import { MantineProvider, TextInput, Button, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import '@mantine/core/styles.css';

export default function App() {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
    },
    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (value.length < 2 ? 'Name must have at least 2 characters' : null),
    },
  });

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    alert('Form submitted successfully!');
  };

  return (
    <MantineProvider>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack p="md" gap="md">
          <TextInput
            label="Name"
            placeholder="Enter your name"
            required
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            {...form.getInputProps('email')}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </MantineProvider>
  );
}`}
              dependencies={{
                '@mantine/core': '^7.14.4',
                '@mantine/hooks': '^7.14.4',
                '@mantine/form': '^7.14.4',
              }}
            />
          </DemoBlock>
        </SubsectionBlock>

        <SubsectionBlock heading="Dialogs & Overlays">
          <CriteriaGrid>
            <CriteriaItem label="What matters">
              <p>
                Focus trapping (keyboard users can't escape), accessible
                close mechanisms, backdrop click handling, scroll locking on the body, and animations
                that don't cause layout shift.
              </p>
            </CriteriaItem>
            <CriteriaItem label="Mantine's approach">
              <p>
                Modal component handles focus trapping via @mantine/hooks,
                includes built-in overlay, supports nested modals, and provides size presets. Drawers and
                Popovers follow similar patterns. Accessibility is handled by default with proper ARIA attributes.
              </p>
            </CriteriaItem>
          </CriteriaGrid>
          <DemoBlock title="Modal Behavior">
            <SandpackEditor
              code={`import { MantineProvider, Modal, Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <MantineProvider>
      <div style={{ padding: '1rem' }}>
        <Button onClick={open}>Open Modal</Button>

        {/* Modal handles focus trapping, ESC key, and backdrop clicks automatically */}
        <Modal opened={opened} onClose={close} title="Example Modal">
          <Text size="sm">
            This modal demonstrates Mantine's accessibility features:
          </Text>
          <ul style={{ fontSize: '0.875rem' }}>
            <li>Focus is trapped inside the modal</li>
            <li>Press ESC to close</li>
            <li>Click backdrop to close</li>
            <li>Body scroll is locked</li>
          </ul>
          <Button onClick={close} mt="md">Close Modal</Button>
        </Modal>
      </div>
    </MantineProvider>
  );
}`}
              dependencies={{
                '@mantine/core': '^7.14.4',
                '@mantine/hooks': '^7.14.4',
              }}
            />
          </DemoBlock>
        </SubsectionBlock>

        <SubsectionBlock heading="Notifications">
          <CriteriaGrid>
            <CriteriaItem label="What matters">
              <p>
                Global vs contextual feedback, dismissibility, auto-dismiss timers,
                stacking behavior, and accessibility announcements for screen readers.
              </p>
            </CriteriaItem>
            <CriteriaItem label="Mantine's approach">
              <p>
                Provides a notifications system (@mantine/notifications)
                with imperative API (notifications.show). Supports positioning, auto-close, colors, icons,
                and actions. Uses Notification component internally with consistent styling. Handles stacking
                and animations out of the box.
              </p>
            </CriteriaItem>
          </CriteriaGrid>
          <DemoBlock title="Notifications & Feedback">
            <SandpackEditor
              code={`import { MantineProvider, Button, Group } from '@mantine/core';
import { Notifications, notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

export default function App() {
  // Global notification system - no local state needed
  // Notifications stack automatically and handle their own lifecycle
  
  const showSuccess = () => {
    notifications.show({
      title: 'Success!',
      message: 'Your action completed successfully',
      color: 'green',
      autoClose: 3000, // Auto-dismiss after 3 seconds
    });
  };

  const showError = () => {
    notifications.show({
      title: 'Error occurred',
      message: 'Something went wrong. Please try again.',
      color: 'red',
      autoClose: 5000,
    });
  };

  const showInfo = () => {
    notifications.show({
      title: 'Information',
      message: 'This is an informational message',
      color: 'blue',
      autoClose: 4000,
    });
  };

  return (
    <MantineProvider>
      {/* Global notification container */}
      <Notifications position="top-right" />
      
      <Group p="md" gap="md">
        <Button onClick={showSuccess} color="green">
          Show Success
        </Button>
        <Button onClick={showError} color="red">
          Show Error
        </Button>
        <Button onClick={showInfo} color="blue">
          Show Info
        </Button>
      </Group>
    </MantineProvider>
  );
}`}
              dependencies={{
                '@mantine/core': '^7.14.4',
                '@mantine/hooks': '^7.14.4',
                '@mantine/notifications': '^7.14.4',
              }}
            />
          </DemoBlock>
        </SubsectionBlock>
      </SectionBlock>
    </ContentContainer>
  );
}
