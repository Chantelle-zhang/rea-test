import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
test("App render two properties column,initial length of Results column is 4 and saved property is 1",
    () => {
        const { container } = render(<App/>)
        const commonList = container.querySelector("ul[data-testid='commonList']");
        const savedList = container.querySelector("ul[data-testid='savedList']");
        expect(commonList).toBeInTheDocument()
        expect(savedList).toBeInTheDocument()

    })

test("after click addItem, savedList add one item, and the item id is the same as the one clicked",
    () => {
    const { container } = render(<App/>)
    const commonList = container.querySelector("ul[data-testid='commonList']")
    const addItemBanner = container.querySelectorAll("ul[data-testid='commonList'] div[data-testid='item']");
    const savedListBeforeClick = container.querySelectorAll("ul[data-testid='savedList'] div[data-testid='item']");
    const length = savedListBeforeClick.length
    const id = commonList?.querySelectorAll('li')[0].dataset.testid
    fireEvent.click(addItemBanner[0])
    const savedListAfterClick = container.querySelectorAll("ul[data-testid='savedList'] div[data-testid='item']");
    const savedList = container.querySelector("ul[data-testid='savedList']")
    const id_ = savedList?.querySelectorAll('li')[length].dataset.testid
    expect(savedListAfterClick).toHaveLength(length + 1)
    expect(id).toBe(id_)

})


test("after click removeItem, savedList remove one item, and the removed item id is the same as the one clicked",
    () => {
    const { container } = render(<App/>)
    const removeItemBannerList = container.querySelectorAll("ul[data-testid='savedList'] div[data-testid='item']");
    const savedListBeforeClick = container.querySelectorAll("ul[data-testid='savedList'] div[data-testid='item']");
    const length = savedListBeforeClick.length
    const id = container.querySelectorAll("ul[data-testid='savedList']  li")[0].dataset.testid
    fireEvent.click(removeItemBannerList[0])
    const savedListAfterClick = container.querySelectorAll("ul[data-testid='savedList'] div[data-testid='item']");
    let itemRemoved = true;
    const liCollection = container.querySelectorAll("ul[data-testid='savedList'] li")
    for ( let i = 0; i < liCollection.length; i++ ) {
        if ( liCollection[i].dataset.testid === id ) {
            itemRemoved = false
        }
    }

    expect(savedListAfterClick).toHaveLength(length - 1)
    expect(itemRemoved).toBeTruthy()

})
