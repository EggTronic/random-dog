const IMAGE_TYPES = ['jpg', 'gif', 'png'];
const AUDIO_TYPES = ['mp4'];

export function getFileType(url) {
    const type = url.split('.').pop();

    if (IMAGE_TYPES.includes(type)) {
        return 'image';
    }

    if (AUDIO_TYPES.includes(type)) {
        return 'video';
    }

    return 'invalid';
}

export async function fetchData(url, size) {
    let result = [];

    for (let i = 0; i < size; i++) {
        let response = await fetch(url, {
            method: 'GET'
        });

        let data = await response.json();
        let type = getFileType(data.url);

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