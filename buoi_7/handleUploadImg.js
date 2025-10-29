const owner = 'SunGoat1001';
const repo = 'Advanced-Web-Design-Homework';
const token = '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';

// upload image to github
function uploadImage(data) {
    return fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/buoi_7/upload/${data.imgName}`,
        {
            method: "PUT",
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                message: "upload image from api",
                content: data.content
            })
        }
    ).then((res) => res.json());
}

function insertImage(src) {
    const newImage = document.createElement("img");
    newImage.src = src;
    newImage.width = 100;
    newImage.height = 100;
    document.querySelector(".img").innerHTML = newImage.outerHTML;
}

function getRandomName(type) {
    if (type.endsWith("png")) {
        return [Date.now(), ".png"].join("");
    }
    return [Date.now(), ".jpeg"].join("");
}

function blobToBase64(blob) {
    return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const srcData = fileReader.result;
            resolve(srcData);
        };
        fileReader.readAsDataURL(blob);
    });
}

function handleImageChange(callback) {
    const $file = document.querySelector(".local");
    $file.addEventListener("change", (event) => {
        const selectedfile = event.target.files;
        if (selectedfile.length > 0) {
            const [imageFile] = selectedfile;
            blobToBase64(imageFile).then((srcData) => {
                insertImage(srcData);
                callback &&
                    callback({
                        content: srcData,
                        imgName: imageFile.name,
                        type: imageFile.type
                    });
            });
        }
    });
}


