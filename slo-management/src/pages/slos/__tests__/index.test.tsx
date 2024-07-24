import { render, screen } from '@testing-library/react';
import { Slo } from 'src/entities/Slo';
import Slos from '..';
import SloMocks from '../__mocks__/mocks';

describe('SLO Page', () => {
    it('should render the Slos page', () => {
        const slos: Slo[] = []
        render(<Slos slos={slos} />);
    });

    it('should render a single SLO value', () => {
        const mock = SloMocks.getUniqueSlo();

        render(<Slos slos={mock}/>);

        const thresholdValue = screen.getByRole('cell', { name: 'Rate of successful payments per week' });

        expect(thresholdValue).toBeInTheDocument();
    });
})