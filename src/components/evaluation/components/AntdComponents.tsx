import { DemoBlock } from '@/components/demo/DemoBlock';
import { SandpackEditor } from '@/components/demo/SandpackEditor';
import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function AntdComponents() {
  return (
    <ContentContainer>
      <SectionBlock title="Ant Design: Components">
        <SubsectionBlock heading="Tables & Data Grids">
          <p>
            <strong>Table as a first-class citizen:</strong> Ant Design's Table component is not an afterthought—it's
            a core primitive designed for enterprise data management. It handles sorting, filtering, pagination,
            row selection, expandable rows, fixed headers, and horizontal scrolling out of the box. For applications
            where tables are the primary interface (admin panels, CRMs, analytics dashboards), this comprehensive
            feature set eliminates significant custom development.
          </p>
          <p>
            <strong>Built-in sorting, filtering, pagination:</strong> Sorting is configured via column definitions
            with automatic UI indicators. Filters support multiple modes (text search, select dropdowns, date ranges)
            through declarative column configuration. Pagination is built in with customizable page sizes and position.
            These features work together seamlessly, but they also assume specific interaction patterns. Deviating from
            Ant Design's table model (e.g., implementing custom filter UIs or non-standard pagination) requires working
            around the abstraction.
          </p>
          <p>
            <strong>Column configuration complexity:</strong> Table columns are configured via a complex object structure
            defining render functions, sorters, filters, fixed positioning, and responsive behavior. This configuration
            is powerful but verbose. Large tables with dozens of columns result in hundreds of lines of column definitions.
            For teams maintaining many tables, this configuration becomes significant overhead. The abstraction optimizes
            for feature completeness, not brevity.
          </p>
          <p>
            <strong>Performance tradeoffs with large datasets:</strong> Ant Design's Table renders all rows by default,
            which degrades performance with large datasets (thousands of rows). Virtual scrolling exists but is opt-in
            and introduces additional complexity. For enterprise applications with moderate dataset sizes (hundreds of
            rows per page), performance is acceptable. For data-heavy dashboards with tens of thousands of rows, teams
            must implement virtualization or pagination carefully, or choose specialized libraries.
          </p>
          <p>
            <strong>Enterprise productivity vs flexibility:</strong> The Table component accelerates development for
            standard enterprise use cases—CRUD operations, data exports, bulk actions, inline editing. Teams building
            these patterns repeatedly benefit significantly. However, highly custom table UIs (non-standard cell renderers,
            novel interaction patterns, unique filtering UX) fight the abstraction. Ant Design assumes enterprise tables
            follow enterprise conventions. When they don't, customization friction is high.
          </p>
          <DemoBlock title="Table with Sorting, Filtering, Pagination">
            <SandpackEditor
              code={`import React from 'react';
import { Table, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';

// Sample dataset - typical enterprise data
const dataSource = [
  { key: '1', name: 'John Brown', age: 32, department: 'Engineering', email: 'john@example.com', status: 'Active' },
  { key: '2', name: 'Jim Green', age: 42, department: 'Sales', email: 'jim@example.com', status: 'Active' },
  { key: '3', name: 'Joe Black', age: 28, department: 'Engineering', email: 'joe@example.com', status: 'Inactive' },
  { key: '4', name: 'Sarah Smith', age: 35, department: 'Marketing', email: 'sarah@example.com', status: 'Active' },
  { key: '5', name: 'Mike Johnson', age: 29, department: 'Engineering', email: 'mike@example.com', status: 'Active' },
  { key: '6', name: 'Emily Davis', age: 31, department: 'Sales', email: 'emily@example.com', status: 'Active' },
  { key: '7', name: 'David Wilson', age: 45, department: 'HR', email: 'david@example.com', status: 'Active' },
  { key: '8', name: 'Lisa Anderson', age: 27, department: 'Engineering', email: 'lisa@example.com', status: 'Inactive' },
  { key: '9', name: 'Robert Taylor', age: 38, department: 'Marketing', email: 'robert@example.com', status: 'Active' },
  { key: '10', name: 'Jennifer White', age: 33, department: 'Sales', email: 'jennifer@example.com', status: 'Active' },
  { key: '11', name: 'Michael Brown', age: 41, department: 'Engineering', email: 'michael@example.com', status: 'Active' },
  { key: '12', name: 'Jessica Garcia', age: 26, department: 'HR', email: 'jessica@example.com', status: 'Active' },
];

export default function App() {
  // Table is a first-class abstraction - columns are declaratively configured
  // Verbosity lives in column config, but features are comprehensive
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // Sorting is built in - just add sorter function
      sorter: (a, b) => a.name.localeCompare(b.name),
      // Column width can be configured
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      // Numeric sorting built in
      sorter: (a, b) => a.age - b.age,
      width: 80,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      // Filtering is built in - declarative filter configuration
      filters: [
        { text: 'Engineering', value: 'Engineering' },
        { text: 'Sales', value: 'Sales' },
        { text: 'Marketing', value: 'Marketing' },
        { text: 'HR', value: 'HR' },
      ],
      onFilter: (value, record) => record.department === value,
      width: 130,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      // No virtualization by default - all rows render
      // For large datasets, this impacts performance
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Active', value: 'Active' },
        { text: 'Inactive', value: 'Inactive' },
      ],
      onFilter: (value, record) => record.status === value,
      // Custom render function for status badges
      render: (status) => (
        <span
          style={{
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            backgroundColor: status === 'Active' ? '#e6f7ff' : '#f5f5f5',
            color: status === 'Active' ? '#1890ff' : '#8c8c8c',
            border: \`1px solid \${status === 'Active' ? '#91d5ff' : '#d9d9d9'}\`,
          }}
        >
          {status}
        </span>
      ),
      width: 100,
    },
  ];

  return (
    <ConfigProvider>
      <div style={{ padding: '24px' }}>
        <h3 style={{ marginBottom: '16px' }}>Employee Directory</h3>
        
        {/* Pagination is built in - configure via pagination prop */}
        {/* Sorting/filtering UI appears automatically based on column config */}
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            pageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '20'],
            showTotal: (total) => \`Total \${total} items\`,
          }}
          // Table handles responsive behavior
          scroll={{ x: 'max-content' }}
        />

        <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#595959' }}>
            <strong>Key Observations:</strong>
          </p>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13px', color: '#595959' }}>
            <li>Column config is verbose but comprehensive</li>
            <li>Sorting, filtering, pagination work out of the box</li>
            <li>No virtualization - renders all rows (performance cost at scale)</li>
            <li>Enterprise workflows benefit from built-in features</li>
            <li>Customization requires working within AntD's model</li>
          </ul>
        </div>
      </div>
    </ConfigProvider>
  );
}`}
              dependencies={{
                'react': '^18.0.0',
                'react-dom': '^18.0.0',
                'antd': '^5.12.0',
              }}
            />
          </DemoBlock>

          <h3>Forms & Validation</h3>
          <p>
            <strong>Form as a stateful abstraction:</strong> Ant Design's Form component is a comprehensive stateful
            abstraction managing field values, validation states, error messages, and submission logic. It wraps form
            state management, reducing boilerplate compared to manual state handling or integrating external form libraries.
            For teams building many forms, this abstraction accelerates delivery. For teams with complex form requirements
            or existing form infrastructure, it introduces an additional layer to manage.
          </p>
          <p>
            <strong>Declarative validation rules:</strong> Validation is defined via rules arrays on form items
            (<code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code>, custom validators).
            This declarative approach is readable and consistent across forms. Error messages are automatically displayed
            below fields, styled according to Ant Design's visual language. For standard validation (required fields,
            email patterns, length constraints), this works well. For complex cross-field validation or conditional
            rules, the declarative model becomes limiting, requiring workarounds.
          </p>
          <p>
            <strong>Layout control (horizontal, vertical, inline):</strong> Forms support layout modes controlling
            label-field alignment automatically. Horizontal mode aligns labels left of fields with configurable label
            width. Vertical mode stacks labels above fields. Inline mode renders fields side-by-side. These modes handle
            common enterprise form layouts without custom CSS, but they also assume specific layout patterns. Forms
            requiring custom spacing, asymmetric layouts, or non-standard alignment fight the abstraction.
          </p>
          <p>
            <strong>Automatic label/field alignment:</strong> Ant Design's Form handles label alignment, error message
            positioning, and required indicators automatically based on layout mode. This ensures visual consistency
            across forms without manual styling. For large applications with hundreds of forms, this consistency is
            valuable. However, it also means forms look recognizably Ant Design. Teams seeking unique form aesthetics
            must override default styling extensively.
          </p>
          <p>
            <strong>Strong defaults vs customization friction:</strong> Ant Design's Form excels when your requirements
            align with its defaults—enterprise forms with standard validation, predictable layouts, and conventional
            field types. When requirements diverge—multi-step wizards with complex state, forms with dynamic field
            generation, or non-standard validation UX—the abstraction introduces friction. Teams spend time working
            around Form's opinions rather than benefiting from its automation.
          </p>
          <DemoBlock title="Form with Declarative Validation">
            <SandpackEditor
              code={`import React from 'react';
import { Form, Input, Select, Button, ConfigProvider, message } from 'antd';
import 'antd/dist/reset.css';

const { Option } = Select;

export default function App() {
  // Form manages state and validation automatically
  // No need for useState or external form libraries
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Values are automatically collected from form fields
    console.log('Form values:', values);
    message.success('Form submitted successfully!');
  };

  const onFinishFailed = (errorInfo) => {
    // Validation errors are handled automatically
    console.log('Validation failed:', errorInfo);
    message.error('Please fix validation errors');
  };

  return (
    <ConfigProvider>
      <div style={{ padding: '24px', maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '24px' }}>User Registration Form</h3>
        
        {/* Form layout and alignment are automatic */}
        {/* layout="vertical" stacks labels above fields */}
        <Form
          form={form}
          name="userRegistration"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Validation rules are declarative - no custom logic needed */}
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              { required: true, message: 'Please enter your name' },
              { min: 2, message: 'Name must be at least 2 characters' },
            ]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: 'Please select a role' }]}
          >
            <Select placeholder="Select a role">
              <Option value="developer">Developer</Option>
              <Option value="designer">Designer</Option>
              <Option value="manager">Manager</Option>
              <Option value="analyst">Analyst</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true, message: 'Please select a department' }]}
          >
            <Select placeholder="Select a department">
              <Option value="engineering">Engineering</Option>
              <Option value="design">Design</Option>
              <Option value="sales">Sales</Option>
              <Option value="marketing">Marketing</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit Registration
            </Button>
          </Form.Item>
        </Form>

        <div style={{ marginTop: '24px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#595959' }}>
            <strong>Key Observations:</strong>
          </p>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13px', color: '#595959' }}>
            <li>Form manages state - no useState needed</li>
            <li>Validation rules are declarative (required, type, min, etc.)</li>
            <li>Layout and alignment automatic (vertical layout)</li>
            <li>Error messages positioned and styled automatically</li>
            <li>Customization outside this model requires workarounds</li>
            <li>Strongly opinionated - recognizably Ant Design</li>
          </ul>
        </div>

        <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#e6f7ff', borderRadius: '4px', border: '1px solid #91d5ff' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#003a8c' }}>
            <strong>Try it:</strong> Submit without filling fields to see automatic error handling.
            Fill the form to see success feedback.
          </p>
        </div>
      </div>
    </ConfigProvider>
  );
}`}
              dependencies={{
                'react': '^18.0.0',
                'react-dom': '^18.0.0',
                'antd': '^5.12.0',
              }}
            />
          </DemoBlock>
        </SubsectionBlock>

        <SubsectionBlock heading="Layout & Navigation">
          <p>
            <strong>Opinionated page scaffolding:</strong> Ant Design provides Layout, Sider, Header, Footer, and Content
            components for scaffolding application structure. These components assume specific patterns—top navigation with
            optional side menu, collapsible sidebars, fixed headers. For enterprise applications following these conventions,
            Layout components eliminate layout boilerplate. For applications with non-standard page structures (split-screen
            layouts, dashboard grids, unconventional navigation), the components provide little value.
          </p>
          <p>
            <strong>Menu component for navigation:</strong> Ant Design's Menu handles top navigation, side navigation,
            and dropdown menus with built-in expand/collapse, icon support, and active state management. Menu configuration
            is declarative via nested item definitions. This works well for applications with stable, hierarchical navigation.
            For applications with dynamic menus, permission-based navigation, or context-dependent menu items, the declarative
            model requires programmatic generation and state management that the abstraction doesn't simplify.
          </p>
          <p>
            <strong>Breadcrumb and Tabs for sub-navigation:</strong> Breadcrumb provides hierarchical navigation breadcrumbs
            with automatic separators and routing integration. Tabs manages tabbed interfaces with controlled or uncontrolled
            state. These components assume enterprise navigation patterns—breadcrumbs for deep hierarchies, tabs for contextual
            views. They handle these use cases well but offer little for applications with novel navigation requirements.
          </p>
          <p>
            <strong>Predictable UX for enterprise users:</strong> Ant Design's Layout and Navigation components enforce
            consistency. Users familiar with one Ant Design application transfer knowledge to others. Menu behavior, breadcrumb
            styling, and layout structure are predictable. For enterprises managing many internal tools, this predictability
            reduces training and support burden. For consumer products seeking differentiation, this predictability is
            homogeneity.
          </p>
          <p>
            <strong>Limited freedom for bespoke layouts:</strong> Ant Design's layout primitives optimize for specific
            patterns. Applications requiring unconventional page structures—asymmetric grids, magazine-style layouts,
            dashboard mosaics—find minimal support. Teams either accept Ant Design's layout conventions or abandon the
            Layout components entirely and build custom structures, losing the consistency benefits.
          </p>

          <h3>Modals, Drawers & Feedback</h3>
          <p>
            <strong>Imperative APIs for global patterns:</strong> Ant Design's Modal, Drawer, Notification, and Message
            components offer imperative APIs (<code>Modal.confirm()</code>, <code>message.success()</code>) for triggering
            UI globally. This aligns with enterprise workflows where feedback and confirmations are triggered from business
            logic, not just user interactions. Teams can show notifications from API response handlers, trigger modals from
            validation failures, or display messages from background processes without managing component state manually.
          </p>
          <p>
            <strong>Modal for confirmations and workflows:</strong> Modal supports both declarative (JSX) and imperative
            (function call) usage. The imperative API is particularly valuable for confirmation dialogs, alerts, and
            decision prompts triggered from logic rather than UI. <code>Modal.confirm()</code> returns a promise, enabling
            await-based workflows. This pattern is common in enterprise applications and Ant Design optimizes for it.
            However, the imperative API reduces composability—modals triggered this way can't easily accept custom React
            components without workarounds.
          </p>
          <p>
            <strong>Drawer for side panels and details:</strong> Drawer provides slide-out panels for displaying details,
            forms, or contextual information without navigating away. It supports placement (left, right, top, bottom) and
            nested drawers for multi-level navigation. For applications with detail views or editing workflows that shouldn't
            interrupt the main context, Drawer is productive. The abstraction handles overlay, scroll locking, and animations
            automatically, but customization of animations or non-standard drawer behaviors is limited.
          </p>
          <p>
            <strong>Notification and Message for feedback:</strong> Notification displays timed, dismissible alerts in a
            fixed corner position. Message displays brief, centered feedback that auto-dismisses. Both use imperative APIs
            (<code>notification.open()</code>, <code>message.info()</code>). For global feedback patterns, this is ergonomic—
            trigger notifications from anywhere without managing component trees. The tradeoff is reduced control over positioning,
            stacking, and custom layouts. Notifications follow Ant Design's visual language and positioning conventions.
          </p>
          <p>
            <strong>Consistency across the app:</strong> Because Modal, Drawer, Notification, and Message are globally
            configured, their behavior and appearance are consistent application-wide. Confirmation dialogs use the same
            button styles. Notifications appear in the same position. Messages have consistent timing. For enterprise
            applications where predictable UX reduces user confusion, this consistency is valuable. For applications
            requiring context-specific feedback patterns, this global uniformity is limiting.
          </p>
          <p>
            <strong>Ease of use vs composability:</strong> Ant Design's imperative APIs prioritize ease of use over
            composability. Triggering a modal or notification with a single function call is fast. The cost is reduced
            flexibility—imperative UIs are harder to test, harder to compose with other React patterns, and harder to
            customize deeply. Teams building standard enterprise workflows benefit. Teams needing highly dynamic or
            composable feedback UIs find the imperative model constraining.
          </p>
          <DemoBlock title="Modal & Drawer (Imperative Workflow Patterns)">
            <SandpackEditor
              code={`import React, { useState } from 'react';
import { Modal, Drawer, Button, ConfigProvider, Space, Descriptions } from 'antd';
import 'antd/dist/reset.css';

export default function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Imperative API optimized for workflows
  // Confirmation dialogs without component state
  const handleDeleteConfirm = () => {
    Modal.confirm({
      title: 'Confirm Deletion',
      content: 'Are you sure you want to delete this user? This action cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      // Promise-based confirmation handling - works with async workflows
      onOk() {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('User deleted');
            Modal.success({
              content: 'User successfully deleted',
            });
            resolve();
          }, 1000);
        });
      },
      onCancel() {
        console.log('Deletion cancelled');
      },
    });
  };

  // Standard imperative warning modal
  const handleWarning = () => {
    Modal.warning({
      title: 'System Maintenance',
      content: 'The system will undergo maintenance in 10 minutes. Please save your work.',
    });
  };

  // Info modal for notifications
  const handleInfo = () => {
    Modal.info({
      title: 'New Features Available',
      content: (
        <div>
          <p>We've added several new features:</p>
          <ul>
            <li>Advanced filtering in data tables</li>
            <li>Bulk export functionality</li>
            <li>Custom dashboard widgets</li>
          </ul>
        </div>
      ),
    });
  };

  return (
    <ConfigProvider>
      <div style={{ padding: '24px' }}>
        <h3 style={{ marginBottom: '24px' }}>Modal & Drawer Examples</h3>

        <div style={{ marginBottom: '32px' }}>
          <h4>Imperative Modals (No Component State)</h4>
          <Space>
            <Button type="primary" danger onClick={handleDeleteConfirm}>
              Delete User (Confirm)
            </Button>
            <Button onClick={handleWarning}>
              Show Warning
            </Button>
            <Button type="primary" onClick={handleInfo}>
              Show Info
            </Button>
          </Space>
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#595959' }}>
            These modals are triggered via function calls - no JSX, no state management.
            Ideal for workflow confirmations and alerts.
          </p>
        </div>

        <div>
          <h4>Drawer (Side Panel Pattern)</h4>
          <Button type="default" onClick={() => setDrawerVisible(true)}>
            View User Details
          </Button>
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#595959' }}>
            Drawers are common in admin interfaces for viewing details without
            navigating away from the main view.
          </p>
        </div>

        {/* Predictable UX over composability */}
        {/* Drawer follows enterprise patterns - side panel with overlay */}
        <Drawer
          title="User Details"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={400}
        >
          <Descriptions column={1} bordered>
            <Descriptions.Item label="User ID">1001</Descriptions.Item>
            <Descriptions.Item label="Name">John Brown</Descriptions.Item>
            <Descriptions.Item label="Email">john@example.com</Descriptions.Item>
            <Descriptions.Item label="Role">Administrator</Descriptions.Item>
            <Descriptions.Item label="Department">Engineering</Descriptions.Item>
            <Descriptions.Item label="Status">
              <span style={{ color: '#52c41a' }}>Active</span>
            </Descriptions.Item>
            <Descriptions.Item label="Joined">January 15, 2024</Descriptions.Item>
          </Descriptions>

          <div style={{ marginTop: '24px' }}>
            <Space>
              <Button type="primary">Edit User</Button>
              <Button danger>Deactivate</Button>
            </Space>
          </div>
        </Drawer>

        <div style={{ marginTop: '32px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#595959' }}>
            <strong>Key Observations:</strong>
          </p>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13px', color: '#595959' }}>
            <li>Modal.confirm() returns a promise - async workflow support</li>
            <li>No component state needed for imperative modals</li>
            <li>Drawer handles overlay, scroll lock, animations automatically</li>
            <li>Predictable UX across enterprise applications</li>
            <li>Composability traded for ease of use and consistency</li>
            <li>Global styling ensures uniform appearance</li>
          </ul>
        </div>

        <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#e6f7ff', borderRadius: '4px', border: '1px solid #91d5ff' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#003a8c' }}>
            <strong>Try it:</strong> Click "Delete User" to see promise-based confirmation.
            Open the Drawer to see typical admin detail panel pattern.
          </p>
        </div>
      </div>
    </ConfigProvider>
  );
}`}
              dependencies={{
                'react': '^18.0.0',
                'react-dom': '^18.0.0',
                'antd': '^5.12.0',
              }}
            />
          </DemoBlock>

          <DemoBlock title="Notifications & Messages (Global Feedback APIs)">
            <SandpackEditor
              code={`import React from 'react';
import { Button, ConfigProvider, Space, notification, message } from 'antd';
import 'antd/dist/reset.css';

export default function App() {
  // Imperative global feedback - optimized for business workflows
  // No component state or context providers needed

  const showSuccessMessage = () => {
    // Message API for brief, centered feedback
    // Auto-dismisses after 3 seconds (configurable)
    message.success('Operation completed successfully!');
  };

  const showErrorMessage = () => {
    message.error('Failed to process request. Please try again.');
  };

  const showLoadingMessage = () => {
    // Loading message with manual dismiss
    const hide = message.loading('Processing your request...', 0);
    // Simulate async operation
    setTimeout(() => {
      hide();
      message.success('Request processed successfully');
    }, 2000);
  };

  const showSuccessNotification = () => {
    // Notification API for richer, longer-lived feedback
    // Appears in corner with title, description, and close button
    notification.success({
      message: 'Upload Complete',
      description: 'Your file has been uploaded successfully. Processing will begin shortly.',
      placement: 'topRight',
      duration: 4.5,
    });
  };

  const showErrorNotification = () => {
    notification.error({
      message: 'Connection Failed',
      description: 'Unable to connect to the server. Please check your network connection and try again.',
      placement: 'topRight',
      duration: 0, // Will not auto-dismiss - user must close manually
    });
  };

  const showInfoNotification = () => {
    notification.info({
      message: 'System Update',
      description: 'A new version is available. The application will update automatically in 5 minutes.',
      placement: 'bottomRight',
      duration: 6,
    });
  };

  const showWarningNotification = () => {
    notification.warning({
      message: 'Unsaved Changes',
      description: 'You have unsaved changes. Please save your work before navigating away.',
      placement: 'topRight',
    });
  };

  // Workflow example: async operation with feedback
  const handleAsyncOperation = async () => {
    const hide = message.loading('Saving data...', 0);
    
    // Simulate API call
    setTimeout(() => {
      hide();
      
      notification.success({
        message: 'Data Saved',
        description: 'Your changes have been saved to the database.',
        placement: 'topRight',
      });
    }, 1500);
  };

  return (
    <ConfigProvider>
      <div style={{ padding: '24px' }}>
        <h3 style={{ marginBottom: '24px' }}>Global Feedback Examples</h3>

        <div style={{ marginBottom: '32px' }}>
          <h4>Message API (Brief Centered Feedback)</h4>
          <Space>
            <Button type="primary" onClick={showSuccessMessage}>
              Success Message
            </Button>
            <Button danger onClick={showErrorMessage}>
              Error Message
            </Button>
            <Button onClick={showLoadingMessage}>
              Loading Message
            </Button>
          </Space>
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#595959' }}>
            Messages are brief, centered, and auto-dismiss. Ideal for simple feedback.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4>Notification API (Rich Corner Alerts)</h4>
          <Space wrap>
            <Button type="primary" onClick={showSuccessNotification}>
              Success Notification
            </Button>
            <Button danger onClick={showErrorNotification}>
              Error (No Auto-dismiss)
            </Button>
            <Button onClick={showInfoNotification}>
              Info (Bottom Right)
            </Button>
            <Button onClick={showWarningNotification}>
              Warning
            </Button>
          </Space>
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#595959' }}>
            Notifications are richer (title + description), positioned in corners,
            and can persist until manually dismissed.
          </p>
        </div>

        <div>
          <h4>Workflow Example</h4>
          <Button type="primary" onClick={handleAsyncOperation}>
            Save Data (Loading → Success)
          </Button>
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#595959' }}>
            Common pattern: loading indicator during async operation, then success feedback.
          </p>
        </div>

        <div style={{ marginTop: '32px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#595959' }}>
            <strong>Key Observations:</strong>
          </p>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13px', color: '#595959' }}>
            <li>Imperative APIs - call message.success() or notification.open() from anywhere</li>
            <li>No component state or providers needed</li>
            <li>Auto-dismiss configurable (duration: 0 prevents auto-dismiss)</li>
            <li>Placement options: topLeft, topRight, bottomLeft, bottomRight</li>
            <li>Consistent UX without component composition</li>
            <li>Optimized for business workflows (async operations, confirmations)</li>
          </ul>
        </div>

        <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#e6f7ff', borderRadius: '4px', border: '1px solid #91d5ff' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#003a8c' }}>
            <strong>Try it:</strong> Click buttons to see different feedback types.
            Notice how error notifications don't auto-dismiss (duration: 0).
          </p>
        </div>
      </div>
    </ConfigProvider>
  );
}`}
              dependencies={{
                'react': '^18.0.0',
                'react-dom': '^18.0.0',
                'antd': '^5.12.0',
              }}
            />
          </DemoBlock>
        </SubsectionBlock>
      </SectionBlock>
    </ContentContainer>
  );
}
