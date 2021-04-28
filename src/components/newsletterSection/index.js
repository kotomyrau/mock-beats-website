import React from 'react'
import { NewsletterContainer, FormWrapper, FormHeader, FormSubheader, FormContainer, Form, FormLabel, Input, FormButton} from './NewsletterElements'

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <FormWrapper>
        <FormHeader>
          Hear it first
        </FormHeader>
        <FormSubheader>
          Get updates on product drops, collaborations and all things Beats. 
        </FormSubheader>
        <FormContainer>
          <Form class="newsletter-form" onSubmit="#">
            <Input placeholder="Enter your email" required='true' /><br/>
            <FormButton type="submit" value="Sign Up" />
          </Form>
        </FormContainer>
      </FormWrapper>
    </NewsletterContainer>
  )
}

export default Newsletter
