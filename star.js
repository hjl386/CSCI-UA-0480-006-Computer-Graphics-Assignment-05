/*canvas1.update = function(g){
	g.fillStyle = 'green';
	g.fillRect(10, 10, 100, 100);
*/
canvas1.update = function(g) {
	var blue = 128 + Math.floor(128 * Math.sin(10 * time));
   blue = 0;

   g.fillStyle = 'rgb(255,128,' + blue + ')';
   g.lineWidth = 20;
   g.lineCap = 'round';
   g.lineJoin = 'round';

   g.beginPath();
   g.moveTo(0, 0);
   g.lineTo(this.width, 0);
   g.lineTo(this.width, this.height);
   g.lineTo(0, this.height);
   g.lineTo(0, 0);
   g.stroke();

   g.beginPath();

   var x = this.cursor.x;
   var y = this.cursor.y;
   var z = this.cursor.z;
   if (z == 0) {
      x = this.width / 2;
      y = this.height / 2;
   }

   var angle = Math.sin(time);
   var flapY = 100 * Math.sin(angle);
   var flapX = 100 * Math.cos(angle);
   g.moveTo(x-flapX, y-flapY);
   g.lineTo(x, y);
   g.lineTo(x+flapX, y-flapY);
   g.stroke();
}
/*
g.lineWidth = 5;

	g.beginPath();
	g.moveTo(0, 0);
	g.lineTo(this.width, 0);
	g.lineTo(this.width, this.height);
	g.lineTo(0, this.height);
	g.lineTo(0,0);
	g.stroke();

	var x = this.cursor.x
	var y = this.cursor.y;
	var z = this.cursor.z;
   if (z == 0) {
   	x = this.width  / 2 + 30 * Math.sin(time) ;
      y = this.height / 2 + 30 * Math.cos(time);
	}

  	var freq = z == 0 ? 6 : 12;
   var f = .2;
  	var angle = -2 * f * (Math.sin(freq * time) - 0.5);
   var angle2 =     f * (Math.cos(freq * time) - 1);

   var flapY = 40 * Math.sin(angle);
   var flapX = 40 * Math.cos(angle);

   var flapY2 = 40 * Math.sin(2 * angle2);
   var flapX2 = 40 * Math.cos(2 * angle2);

   g.moveTo(x-flapX-flapX2, y-flapY-flapY2);
   g.lineTo(x-flapX, y-flapY);
   g.lineTo(x, y);
   g.lineTo(x+flapX, y-flapY);
   g.lineTo(x+flapX+flapX2, y-flapY-flapY2);
   g.stroke();
}
*/
draw2DCanvases([canvas1]);
