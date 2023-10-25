import React from 'react'
import Wrapper from '../../../../components/Helpers/Wrapper'
import {faChevronRight, faPlus} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ExtendCategoryAction({createItem, handleForward, handleBackward}) {
  return (
    <Wrapper>
        <button
            onClick={() => {
                createItem();
            }}
            className='icon-button'>
            <FontAwesomeIcon icon={faPlus} />
        </button>
        <button
            onClick={() => {
            // onDelete(rowIndex);
            }}
            className='icon-button'>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
            onClick={() => {
                // onDelete(rowIndex);
            }}
            className='icon-button'>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    </Wrapper>
  )
}

export default ExtendCategoryAction
