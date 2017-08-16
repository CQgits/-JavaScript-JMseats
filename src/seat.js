/**
 * Created by yangjian on 17-8-15.
 */

(function($) {

	var o = function(options) {

		var defaults = {
			rows : 100,
			size : 15,
			cols : 100,
			datas : {}
		};
		options = $.extend(defaults, options);
		var seats = {};

		var $table = $('<table class="seat-table animated" cellpadding="0" cellspacing="0"></table>');
		for (var r = 1; r <= options.rows; r++) {
			var $tr = $('<tr></tr>');
			for (var c = 1; c <= options.cols; c++) {
				var $td = $('<td data-row="'+r+'" data-col="'+c+'"></td>');
				var $seat = $('<span class="seat"></span>');
				$seat.css({
					"width" : options.size + 'px',
					"height" : options.size + 'px'
				});

				$td.on("click", function() {
					$(this).find('span').toggleClass("selected");
					var row = $(this).data('row'), col = $(this).data('col');
					//console.log(row, col);
					seats[row+"_"+col] = {
						"row" : row,
						"col" : col
					};
				});

				if ( options.datas && options.datas[r+"_"+c] ) {

					$td.on("click", function() {
						$(this).find('span').toggleClass("selected");
						var row = $(this).data('row'), col = $(this).data('col');
						//console.log(row, col);
						seats[row+"_"+col] = {
							"row" : row,
							"col" : col
						};
					});
				} else {
					$seat.css({
						"border" : "none",
						"background" : "none"
					});
				}
				$td.append($seat);
				$tr.append($td);
			}
			$table.append($tr);
		}
		$(options.box).css({
			width : (options.cols * (options.size + 1 + 4)) + "px"
		});
		$(options.box).append($table);

		o.prototype.getSeats = function() {
			return seats;
		}
	}

	$.seats = function(options) {
		return new o(options);
	};
})(jQuery);