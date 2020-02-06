import { NextPage, NextPageContext, NextComponentType } from 'next';
import Consumer from 'components/Consumer';
import { CreateProgramProvider } from 'context/createProgram';
import { Formik, Form } from 'formik';
import FormSelect from 'components/FormSelect';
import * as yup from 'yup';

export const schema = yup.object().shape({
	squat: yup.number().required()
});

export default () => (
	<Formik
		initialValues={{
			squat: new Number()
		}}
		validationSchema={schema}
		onSubmit={async (values: any) => {
			console.log(values);
			return;
		}}
	>
		<Form>
			<FormSelect label="Squat reps" name="squat">
				<option value=""> Select amount of reps </option>
				<option value="1"> 1 </option>
				<option value="2"> 2 </option>
				<option value="3"> 3 </option>
			</FormSelect>
			<button type="submit">Submit</button>
		</Form>
	</Formik>
);
