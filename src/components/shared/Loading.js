import React from 'react';
import {Button, Spinner} from "react-bootstrap";

function Loading() {
    return (
        <Button variant="primary" disabled className={'d-block m-auto my-5'}>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    );
}

export default Loading;
