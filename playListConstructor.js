function Playlist() {
  this.playlist = [];
  this.currentMusic = 0;
  this.pervMusic = 0;
  this.isPlaying = false;
  this.stop = function () {
    this.isPlaying = false;
    return `music ${this.playlist[this.currentMusic]} is stoped`;
  };
  this.play = function () {
    let current = this.currentMusic;
    this.isPlaying = true;
    return `is playing music ${this.playlist[current]}`;
  };
  this.next = function () {
    if (this.isPlaying === true) {
      if (this.playlist.length <= this.currentMusic + 1) {
        this.pervMusic = this.currentMusic;
        this.currentMusic = 0;
        return `${this.playlist[this.pervMusic]} is stoped ${
          this.playlist[this.currentMusic]
        } is playing`;
      }
      this.pervMusic = this.currentMusic;
      this.currentMusic++;
      return `${this.playlist[this.pervMusic]} is stoped ${
        this.playlist[this.currentMusic]
      } is playing`;
    }
    return "Music is stoped";
  };
}

function Song(songs, ...properties) {
  Playlist.call(this, ...properties);
  Playlist.prototype = Object.create(Song.prototype);
  this.songs = songs;
  this.playlist = this.songs;
}

let song1 = new Song(["Bob Marly", "Kaspiski gruz", "Scriptonite"]);
console.log(song1.play());
console.log(song1.next());
console.log(song1.next());
console.log(song1.stop());
console.log(song1.next());
