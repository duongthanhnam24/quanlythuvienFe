function Searchh({ handleChange }) {
    return (
        <div className="flex   pl-2 rounded">
            <label className="flex items-center">Tìm kiếm</label>
            <input
                className="border border-black p-2 py-1 rounded ml-4"
                placeholder="Theo Tên, thể loại, tác giả, ..."
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
}

export default Searchh;
