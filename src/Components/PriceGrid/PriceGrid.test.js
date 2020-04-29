import React from "react";
import { render } from '@testing-library/react'
import PriceGrid from "./PriceGrid";

it ('should render one description part, one price part and one commercial part', () => {
    const { getByTestId } = render( <PriceGrid/> )
    expect( getByTestId('price-grid__description') ).toBeTruthy();
    expect( getByTestId('price-grid__commercial') ).toBeTruthy();
    expect( getByTestId('price-grid__detail') ).toBeTruthy();
});

