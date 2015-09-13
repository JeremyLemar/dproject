    	var bdHeight = 8;
    	var bdWidth = 8;
    	
    	var tboard;
        var blackPieces = [];
    	var whitePieces = [];
        var blackPcs = [];
    	var whitePcs = [];
		var imgWhite = [];		
		var imgBlack = [];
					
		var typeRook   = { type:"Rook",   value:4.8  };
		var typeBishop = { type:"Bishop", value:3.1  };
		var typeKnight = { type:"Knight", value:2.8  };
		var typeKing   = { type:"King",   value:999  };
		var typeQueen  = { type:"Queen",  value:9    };
		var typePawn   = { type:"Pawn",   value:1    };
		
		function newPiece2(pset, idx, pcModel) {
			var imgEl = document.createElement("img");
			if (pcModel.color == "white") 
				imgEl.src  = imgWhite[pcModel.type.type];
			else imgEl.src = imgBlack[pcModel.type.type];
			
			imgEl.id = pcModel.color + idx;
			pset.push(imgEl);
			imgEl.setAttribute("idx", idx);
			imgEl.setAttribute("color", pcModel.color);
		}
    
    	function doCells() {
			tboard = document.getElementById('board');
		
    		// Create the board cells
			for (var i=0; i< bdHeight; i++) {
				var trEl = document.createElement("tr");
				tboard.appendChild(trEl);
				var offs = 1;
				for (var j=0; j<bdWidth; j++) {
					var tdEl = document.createElement("td");
					tdEl.className =  "boardSquare" + " ";
					if ((i+j)%2)
						tdEl.className += "blackSquare";
					else 
						tdEl.className += "whiteSquare";
					tdEl.setAttribute("onclick","squareClick(this)");
					trEl.appendChild(tdEl);		
				}
			}
	
			imgWhite["Rook"]   = "./chess/img/white_rook.png";
			imgWhite["Bishop"] = "./chess/img/white_bishop.png";
			imgWhite["Knight"] = "./chess/img/white_knight.png";
			imgWhite["King"]   = "./chess/img/white_king.png";
			imgWhite["Queen"]  = "./chess/img/white_queen.png";
			imgWhite["Pawn"]   = "./chess/img/white_pawn.png";

			imgBlack["Rook"]   = "./chess/img/black_rook.png";
			imgBlack["Bishop"] = "./chess/img/black_bishop.png";
			imgBlack["Knight"] = "./chess/img/black_knight.png";
			imgBlack["King"]   = "./chess/img/black_king.png";
			imgBlack["Queen"]  = "./chess/img/black_queen.png";
			imgBlack["Pawn"]   = "./chess/img/black_pawn.png";
			
			var piece;
			piece = { type:typeRook,   color:"white", active:1 }; whitePcs.push(piece);
			piece = { type:typeKnight, color:"white", active:1 }; whitePcs.push(piece);
			piece = { type:typeBishop, color:"white", active:1 }; whitePcs.push(piece);
			piece = { type:typeQueen,  color:"white", active:1 }; whitePcs.push(piece);
			piece = { type:typeKing,   color:"white", active:1 }; whitePcs.push(piece);
			piece = { type:typeBishop, color:"white", active:1 }; whitePcs.push(piece);
			piece = { type:typeKnight, color:"white", active:1 }; whitePcs.push(piece);
			piece = { type:typeRook,   color:"white", active:1 }; whitePcs.push(piece);
			for (var i=0; i<8; i++) {			
				piece = { type:typePawn,   color:"white", active:1 }; 
				whitePcs.push(piece);	
			}
			for (var idx=0; idx < whitePcs.length; idx++)
				newPiece2(whitePieces, idx, whitePcs[idx]);

			piece = { type:typeRook,   color:"black", active:1 }; blackPcs.push(piece);
			piece = { type:typeKnight, color:"black", active:1 }; blackPcs.push(piece);
			piece = { type:typeBishop, color:"black", active:1 }; blackPcs.push(piece);
			piece = { type:typeQueen,  color:"black", active:1 }; blackPcs.push(piece);
			piece = { type:typeKing,   color:"black", active:1 }; blackPcs.push(piece);
			piece = { type:typeBishop, color:"black", active:1 }; blackPcs.push(piece);
			piece = { type:typeKnight, color:"black", active:1 }; blackPcs.push(piece);
			piece = { type:typeRook,   color:"black", active:1 }; blackPcs.push(piece);
			for (var i=0; i<8; i++) {			
				piece = { type:typePawn,   color:"black", active:1 }; 
				blackPcs.push(piece);	
			}
			
			for (var idx=0; idx < blackPcs.length; idx++)
				newPiece2(blackPieces, idx, blackPcs[idx]);

			for (var j=0; j<whitePieces.length; j++) {
				tboard.rows[bdHeight-1-Math.floor(j/bdWidth)].cells[j%bdWidth].appendChild(whitePieces[j]);
			}
			
			for (var j=0; j<blackPieces.length; j++) {
				tboard.rows[Math.floor(j/bdWidth)].cells[j%bdWidth].appendChild(blackPieces[j]);
			}
				
			switchGamestate();
    	}
    
	function dragTarget(event) {
		alert();
		element = event.target;// Element;
		element.innerHTML = "foo";
		alert(element.nodeName);
	}
	
	var gamestate = "blackturn";
	var clickstate = "";
	var selectedSquare = null;
	
	function switchGamestate() {
		gamestate = (gamestate == "white") ? "black" : "white";
		turnEl = document.getElementById("turn");
		turnEl.innerHTML = (gamestate == "white") ? "White to play" : "Black to play";
	}
	
	function isallowedmove(elem) {
		if ((selectedSquare) && (selectedSquare != elem) && (selectedSquare.childElementCount)) {
			var pieceFrom = selectedSquare.lastChild;
			var pieceTo = null;
			if (elem.childElementCount) {
				pieceTo = elem.lastChild;
				//alert(pieceFrom.getAttribute("color"))
				if (pieceFrom.getAttribute("color") == pieceTo.getAttribute("color"))
					return false;
					
			}
			return isallowedpiecemove(selectedSquare, elem, pieceFrom, pieceTo);
		}
		return false; 
	
	}
	
	function isIntermediateSquaresOccupied(xFrom, yFrom, xincr, yincr, amplitude) {
		for (var i=1; i<amplitude;  i++) {
			if (tboard.rows[yFrom + i*yincr].cells[xFrom + i*xincr].childElementCount != 0)
				return true;			
		}
		return false;
	}
	
	function isallowedpiecemove(sqFrom, sqTo, pcFrom, pcTo) {
		//alert('My position in table is: '+elem.cellIndex+'x'+ elem.parentNode.rowIndex);
		var xFrom = sqFrom.cellIndex;
		var yFrom = sqFrom.parentNode.rowIndex;
		var xTo   = sqTo.cellIndex;
		var yTo   = sqTo.parentNode.rowIndex;
		var result = false;
		var ampl;
		//alert( "" + xFrom + "x" + yFrom + " " + xTo + "x" + yTo  );
		
		var idx   = pcFrom.getAttribute("idx");
		var color = pcFrom.getAttribute("color");
		var pcModel = (color == "white") ? whitePcs[idx] : blackPcs[idx];
		//alert(pcModel.type.type);
		if (pcModel.type == typeRook) { 
			if ((xFrom == xTo) && (yFrom != yTo)) {
				ampl = Math.abs(yTo - yFrom);
				result = !isIntermediateSquaresOccupied(xFrom, yFrom, 0, (yTo - yFrom)/ampl, ampl);
			} else if ((xFrom != xTo) && (yFrom == yTo)) {
				ampl = Math.abs(xTo - xFrom);
				result = !isIntermediateSquaresOccupied(xFrom, yFrom, (xTo - xFrom)/ampl, 0, ampl);
			}
			
		} else if (pcModel.type == typeBishop) {
			if (Math.abs(xFrom - xTo) == Math.abs(yFrom - yTo)) {
				ampl = Math.abs(yTo - yFrom);
				result = !isIntermediateSquaresOccupied(xFrom, yFrom, (xTo-xFrom)/ampl, (yTo - yFrom)/ampl, ampl);
			}
		}
		if (pcModel.type == typeKnight) {
			result = (((Math.abs(xFrom - xTo) == 1) &&
					   (Math.abs(yFrom - yTo) == 2)) ||
					  ((Math.abs(xFrom - xTo) == 2) &&
					   (Math.abs(yFrom - yTo) == 1)));					   
		}
		else if (pcModel.type == typeQueen) {
			if ((xFrom == xTo) && (yFrom != yTo)) {
				ampl = Math.abs(yTo - yFrom);
				result = !isIntermediateSquaresOccupied(xFrom, yFrom, 0, (yTo - yFrom)/ampl, ampl);
			} else if ((xFrom != xTo) && (yFrom == yTo)) {
				ampl = Math.abs(xTo - xFrom);
				result = !isIntermediateSquaresOccupied(xFrom, yFrom, (xTo - xFrom)/ampl, 0, ampl);
			} else if (Math.abs(xFrom - xTo) == Math.abs(yFrom - yTo)) {
				ampl = Math.abs(yTo - yFrom);
				result = !isIntermediateSquaresOccupied(xFrom, yFrom, (xTo-xFrom)/ampl, (yTo - yFrom)/ampl, ampl);
			}
		}
		else if (pcModel.type == typeKing) {
			result = ((Math.abs(xFrom - xTo) < 2) &&
					  (Math.abs(yFrom - yTo) < 2)) ;
		}
		else if (pcModel.type == typePawn) {
			var xDiffallowed = 1;
			if (pcTo == null)
				xDiffallowed = 0;
			var sign = (color == "white") ? -1 : 1;
			
			var speclInitCondition = ((color == "white") && (yFrom == 6) ||
									  (color == "black") && (yFrom == 1));
			if (speclInitCondition && 
				(yTo - yFrom == 2*sign) && xTo-xFrom == 0) {
				//if ((tboard.rows[yFrom +2*sign].cells[xFrom].childElementCount == 0) &&
				//	(tboard.rows[yFrom +1*sign].cells[xFrom].childElementCount == 0))
				
				result = !isIntermediateSquaresOccupied(xFrom, yFrom, 0, sign, 3);
			} else {
				result = ((yTo - yFrom == 1 * sign) &&
					  (Math.abs(xTo-xFrom) == xDiffallowed)) ;
			}
		}
		
		
		
		return result;
	}
	
	
	function isselectable(elem) {
		if (elem.childElementCount) {
			var piece = elem.lastChild;
			if (piece.getAttribute("color") == gamestate)
				return true;
		}
		return false;
	}
	

	
	function selectSquare(elem) {
		unselectSquare();
		selectedSquare = elem;
		//alert('My position in table is: '+elem.cellIndex+'x'+ elem.parentNode.rowIndex);
		selectedSquare.style.background="green";
		clickstate = "pieceselected";
	}
	
	function unselectSquare() {
		if (selectedSquare )
		{
			if (selectedSquare.className == "boardSquare whiteSquare") 
				selectedSquare.style.background = "beige";
			else  selectedSquare.style.background = "brown";
		}
		selectedSquare="";
	}

	function makemove(elem) {
		if (selectedSquare )
		{
			if (selectedSquare.childElementCount) {
				// first remove pieces on target square.
				while (elem.hasChildNodes()) {
					elem.removeChild(elem.lastChild);
				}			
				elem.appendChild(selectedSquare.children[0]);
				clickstate = "";
			}
		}
		unselectSquare();
		switchGamestate();
	}
	
	function squareClick(elem) {
		if (isselectable(elem))
			selectSquare(elem);
		else if ((clickstate == "pieceselected") && isallowedmove(elem)) 
			makemove(elem);
	}
	
	
    	