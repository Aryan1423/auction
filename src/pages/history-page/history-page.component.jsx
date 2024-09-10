import React from "react";
import Stack from "../../components/stack/stack.component";
import "./history-page.styles.scss";
import { useSelector } from "react-redux";

const HistoryPage = () => {
    const history = useSelector((state) => state.history.transactions);
    return (
        <div>
            <div className="heading">Transaction History</div>
            <hr />
            <div>
                {history.map((txn, index) => (
                    <Stack index={index+1} year={txn.carManufacturingYear} type={txn.carTransactionType} name={txn.carName} description={txn.carDescription} img={txn.imgThumbnail} company={txn.carCompany} />
                ))}
            </div>
        </div>
    )
}

export default HistoryPage;
