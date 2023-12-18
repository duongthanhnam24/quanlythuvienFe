function Tr({ children, key }) {
    return (
        <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-cyan-200 dark:hover:bg-gray-600 cursor-pointer "
            key={key}
        >
            {children}
        </tr>
    );
}

export default Tr;
