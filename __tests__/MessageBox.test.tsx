import * as React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';
import ShowMessage from '../src/features/messageBox/MessageBox';

test('shows the message when the checkbox is checked' , () => {
    const testMessage = 'Test Message';
    render(<ShowMessage text={testMessage}/>);

    // expect(screen.queryByText(testMessage)).toBeNull();

    const checkBox = screen.getByTestId('checkbox-1234').querySelector('input[type="checkbox"]')

    fireEvent.click(checkBox)

    expect(screen.getByText(testMessage)).toBeInTheDocument()

})