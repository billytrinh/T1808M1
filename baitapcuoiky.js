
$("#tho").popover({
    trigger : 'click',
    placement : 'top',
    html: 'true',
    content : "<div><input id='abc' type='text'></div>",
    template: '<div class="popover"><div class="arrow"></div>'+
        '<h3 class="popover-title"></h3><div class="popover-content">'+
        '</div><div class="popover-footer"><button type="button" class="btn btn-primary popover-submit">'+
        '<i class="icon-ok icon-white"></i></button>&nbsp;'+
        '<button type="button" class="btn btn-default popover-cancel">'+
        '<i class="icon-remove"></i></button></div></div>'
})
    .on('shown', function() {
        //hide any visible comment-popover
        $("#tho").not(this).popover('hide');
        var $this = $(this);
        //attach link text
        $('.popover-textarea').val($this.text()).focus();
        //close on cancel
        $('.popover-cancel').click(function() {
            $this.popover('hide');
        });
        //update link text on submit
        $('.popover-submit').click(function() {
            $this.text($('#abc').val());
            $this.popover('hide');
            console.log($('#abc').val());
        });
    });
