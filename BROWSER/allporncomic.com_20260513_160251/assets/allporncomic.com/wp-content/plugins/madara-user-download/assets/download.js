(function($){

    $(document).on('click', '#madara-user-dowload', function(){

        var postID = $(this).data('post')
            downloadBtn = $('.manga-action .download-btn');

        $.ajax({
            type : 'POST',
            url : wpMangaSingle.ajax_url,
            data : {
                postID : postID,
                action : 'madara-user-download-manga'
            },
            beforeSend : function(){
                downloadBtn.addClass('loading');
            },
            success : function( response ){
                downloadBtn.removeClass('loading');
                if( response.success == true ) {
                    window.location = response.data.zip_path;
                    jQuery.ajax({
                        url : wpMangaSingle.ajax_url,
                        type : 'POST',
                        data : {
                            action : 'wp-manga-delete-zip',
                            zipDir : response.data.zip_dir,
                        },
                    });
                }else{
                    alert( response.data );
                }
            }
        });

    });
	
	jQuery(document).ready(function () {
		$(document).on('wp_manga_after_load_chapters_list', function(){
			$('.btn-chapter-download').each(function(){
				$(this).on('click', function(e){

					var postID = $(this).data('manga_id');
					var chapter = $(this).data('chapter');
					var downloadBtn = $(this);
					
					if(!downloadBtn.hasClass('loading')){
						$.ajax({
							type : 'POST',
							url : wpMangaSingle.ajax_url,
							data : {
								postID : postID,
								chapter: chapter,
								action : 'madara-user-download-chapter'
							},
							beforeSend : function(){
								downloadBtn.addClass('loading');
							},
							success : function( response ){
								downloadBtn.removeClass('loading');
								if( response.success == true ) {
									window.location = response.data.zip_path;
									jQuery.ajax({
										url : wpMangaSingle.ajax_url,
										type : 'POST',
										data : {
											action : 'wp-manga-delete-zip',
											zipDir : response.data.zip_dir,
										},
									});
								}else{
									alert( response.data );
								}
							}
						});
					}
					
					e.stopPropagation();
					return false;

				});
				
			});
		});
	});
	

})(jQuery);
