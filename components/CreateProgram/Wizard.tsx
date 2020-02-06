import { Wizard, Steps, Step } from 'react-albus' 

export default (): React.ReactNode => (
    <Wizard>
        <Steps>
            <Step
                id="id1"
                render={({ next }) => (
                   'Hello'
                )}
            />

        </Steps>
    </Wizard>
)