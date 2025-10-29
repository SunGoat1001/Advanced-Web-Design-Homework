// CREATE
function addDataToAPI(url, data, callback) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Lỗi khi thêm dữ liệu vào API');
            }
            return response.json();
        })
        .then(result => {
            callback(null, result);
        })
        .catch(err => {
            callback(err, null);
        });
}

// READ
function getDataFromAPI(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Lỗi khi lấy dữ liệu từ API');
            }
            return response.json();
        })
        .then(data => {
            callback(null, data);
        })
        .catch(err => {
            callback(err, null);
        });
}

// UPDATE
function updateDataInAPI(url, id, data, callback) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Lỗi khi cập nhật dữ liệu trong API');
            }
            return response.json();
        })
        .then(result => {
            callback(null, result);
        })
        .catch(err => {
            callback(err, null);
        });
}

// DELETE
function deleteDataFromAPI(url, id, callback) {
    fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Lỗi khi xóa dữ liệu khỏi API');
            }
            return response.json();
        })
        .then(result => {
            callback(null, result);
        })
        .catch(err => {
            callback(err, null);
        });
}

function handleAPIResponse(error, result) {
    if (error) {
        console.error('Lỗi:', error.message);
    } else {
        console.log('Kết quả:', result);
    }
}
