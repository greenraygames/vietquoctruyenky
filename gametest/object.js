class PlayerBase
	{
		charName = "Vô Danh";
		x = 300;
		y = 300;
		xTo = 300;
		yTo = 300;
		isMovingLeft = false;
		speed = 5;
		
		MoveCharacter(xTo, yTo)
		{
			this.xTo = Math.floor(xTo);
			this.yTo = Math.floor(yTo);
		}
		
		UpdateCharacter()
		{
			const dx = this.xTo - this.x;
			const dy = this.yTo - this.y;
		    const distance = Math.sqrt(dx * dx + dy * dy);
			
		
			if (distance > this.speed) 
			{
				this.x += (dx / distance) * this.speed;
				this.y += (dy / distance) * this.speed;	
				this.isMovingLeft = dx < 0;			
			} 
			else 
			{
				this.x = this.xTo;
				this.y = this.yTo;
			}
		}
		
		DrawCharacter(cctx, camX, camY)
		{
			if(this.isMovingLeft == false)
				cctx.drawImage(character, this.x - characterOffsetX - camX, this.y - characterOffsetY - camY);
			else
				cctx.drawImage(character_L, this.x - characterOffsetX - camX, this.y - characterOffsetY - camY);
				
			//drawName
			const originalTextAlign = cctx.textAlign;
			cctx.font = '13px  Courier New';  // You can change the font size as needed
			cctx.fillStyle = '#ffffff'; // Text color
			cctx.textAlign = 'center'; // Center the text horizontally
		
			cctx.strokeStyle = '#000000';
			cctx.lineWidth = 3;
		
			cctx.strokeText(this.charName, this.x - camX, this.y - camY - 80);
			cctx.fillText(this.charName, this.x - camX, this.y - camY - 80);
		
			cctx.textAlign = originalTextAlign;
		}
	}
