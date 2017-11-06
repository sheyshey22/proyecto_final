$.fn.pinterest = function(listaImg)

{
	if (listaImg.length !== 0)
	{
		for (var i = 0; i < listaImg.length; i++)
		{
			let contImg ='<img class="contImg" alt="pinterest">'
			//let contImg = '<iframe class="contImg" frameborder="0" allowfullscreen></iframe>';
			let url = 'https://i.pinimg.com/' + listaImg[i];
			let $cont_img = $(contImg);
			$cont_img.attr('src', url);
			$(this).append($cont_img);
		};
	}
	else
	{
		$(this).html('no hay imagen');
	}
}