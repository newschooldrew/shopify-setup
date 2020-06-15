import {
  Banner,
  Card,
  DisplayText,
  Form,
  FormLayout,
  Frame,
  Layout,
  Page,
  PageActions,
  TextField,
  Toast
} from '@shopify/polaris';
import store from 'store-js';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';  

const CREATE_PRODUCT = gql`
mutation exampleProductCreate($input: ProductInput!) {
  productCreate(input: $input) {
    userErrors {
      field
      message
    }
    product {
      id
      title
      productType
    }
  }
}
`;

class EditProduct extends React.Component {
  state = {
    title: '',
    type:''
  };


  render() {
    const { title,type } = this.state;
    return (
      <Mutation
        mutation={CREATE_PRODUCT}
      >
        {(handleSubmit, {error, data}) => {
                      const showError = error && (
                          <Banner status="critical">{error.message}</Banner>
                        );
                        const showToast = data && (
                          <Toast
                            content="Sucessfully created"
                          />
                        );
    return (
  <Frame>
      <Page>
        <Layout>
        {showToast}
              <Layout.Section>
                  {showError}
              </Layout.Section>
          <Layout.Section>
            <Form>
              <Card sectioned>
                <FormLayout>
                  <FormLayout.Group>
                    <TextField
                      value={title}
                      label="Title"
                      onChange={this.handleChange('title')}
                      type="text"
                    />
                    <TextField
                      value={type}
                      label="Product Type"
                      onChange={this.handleChange('type')}
                      type="text"
                    />
                  </FormLayout.Group>
                </FormLayout>
              </Card>
              <PageActions
                primaryAction={[
                  {
                    content: 'Save',
                    onAction: () => {
                      const productVariableInput = {
                        title: title,
                        productType: type,
                        };
                        handleSubmit({
                          variables: { input: productVariableInput },
                         });
                    }
                  }
                ]}
              />
            </Form>
          </Layout.Section>
        </Layout>
      </Page>
  </Frame>
          );
      }}
      </Mutation>
  );
}

  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };

}

export default EditProduct;