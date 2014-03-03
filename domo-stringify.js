try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "domoStringify",
		function construct( ){
			var domoStringify = function domoStringify( DOMs ){
				if( !( DOMs instanceof Array ) ){
					var parameters = Array.prototype.slice.apply( arguments );
					DOMs = parameters;
				}
				for( var index = 0; index < DOMs.length; index++ ){
					DOMs[ index ] = DOMs[ index ].outerHTML;
				}
				return DOMs.join( "" );
			};
			base.domoStringify = domoStringify;
			return domoStringify;
		} );
} )( base );