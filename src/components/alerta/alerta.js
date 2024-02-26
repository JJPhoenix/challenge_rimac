import {useEffect, useState} from "react";

export const Alert = ({ mensaje, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {visible && (
                <div className="fixed top-0 right-0 mt-10 mr-10 bg-red-500 text-white p-4 rounded-lg shadow-lg flex">
                    <p>{mensaje}</p>
                    <button className="text-white ml-2" onClick={onClose}>X</button>
                </div>
            )}
        </>
    );
};
