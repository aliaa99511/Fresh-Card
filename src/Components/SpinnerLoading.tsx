import { Spinner } from 'react-bootstrap'

const SpinnerLoading = () => {
    return (
        <div className="spinner">
            <Spinner animation="border" role="status">
                <span className="sr-only"></span>
            </Spinner>

        </div>
    )
}

export default SpinnerLoading