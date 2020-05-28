import React from 'react';
import AppContext from '../../store';
import {StyledFormField, StyledInput, Paragraph} from '../StyledComp';

export default function FormField() {
    const [{email, submitted}, dispatch] = React.useContext(AppContext);
    function onChange({target: {value}}) {
        dispatch({type: 'change', payload: {name: 'email', value}});
    }
    const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValid = emailRegEx.test(email);
    
    return (
        <StyledFormField>
            <StyledInput
                error={submitted && !isValid}
                value={email}
                onChange={onChange}
                aria-label="email"
                placeholder="Please enter email"
            />
            {submitted && !isValid && <Paragraph error>Please provide a valid email address</Paragraph>}
        </StyledFormField>
    )
}