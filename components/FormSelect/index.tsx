import { useField } from 'formik'
import styled from 'styled-components'

const FormSelect = ({ label, ...props }: Props) => {
    const [field, meta] = useField(props);
    console.log(meta)
    const errorMsg = meta.touched && meta.error;
    return (
      <Container>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <select {...field} {...props} />
        {errorMsg && <ErrorMessage> {meta.error} </ErrorMessage>}
      </Container>
    );
  };

type Props = any
export default FormSelect


const Container = styled.div`
	width: 100%;
	margin: 0 0 30px 0;
	display: flex;
    flex-direction: column;
    align-self: center;
`;

const Label = styled.label`
	margin-bottom: 10px;
	color: ${props => props.theme.primaryText};
	font-size: ${props => props.theme.fz.small};
	font-weight: 700;
	letter-spacing: 0.5px;
`;

const ErrorMessage = styled.p`
	top: 77px;
	left: 5px;
	color: red;
	font-size: ${props => props.theme.fz.small};
`;