const IMAGE_TYPES = ['jpg', 'gif', 'png'];
const VIDEO_TYPES = ['mp4'];

// check file type with given url
export function getFileType(url) {
    // get file type
    const type = url.split('.').pop();

    // check if it is image
    if (IMAGE_TYPES.includes(type)) {
        return 'image';
    }

    // check if it is video
    if (VIDEO_TYPES.includes(type)) {
        return 'video';
    }

    // return invalid if no match
    return 'invalid';
}

// fetch data with given batch size and source url
export async function fetchData(url, size) {
    let result = [];

    for (let i = 0; i < size; i++) {
        let response = await fetch(url, {
            method: 'GET'
        });

        let data = await response.json();
        let type = getFileType(data.url);

        // refetch if type is not image nor video
        while (type === 'invalid') {
            response = await fetch(url, {
                method: 'GET'
            });
            data = await response.json();
            type = getFileType(data.url);
        }

        result.push({
            url: data.url, 
            type: type
        })
    }
    
    return result;
}