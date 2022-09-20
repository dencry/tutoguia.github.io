var RENDERER = {
    RESIZE_INTERNAL : 30,
    RADIUS : 25,
    RATE : 0.98,

    init : function (){
        this.setParameters();
        this.setup();
        this.reconstructMethods();
        this.bindEvents();
        this.render();
    },
    setParameters : function(){
        this.$window = $(window);
        this.$container = $('#jsi-hex-container');
        this.$canvas = $('<canvas />');
        this.context =
        this.$canvas.appendTo(this.$container.get(0).getContext('2d'));
        this.hexagon = [];
        this.resizeIds = [];
    },
}