const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '我记得',
            artist: '赵雷',
            url: 'https://www.ytmp3.cn/down/78713.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: '向云端',
            artist: '小霞/海洋BO',
            url: 'http://music.163.com/song/media/outer/url?id=2049512697.mp3',
            cover: 'cover2.jpg',
        }
    ]
});