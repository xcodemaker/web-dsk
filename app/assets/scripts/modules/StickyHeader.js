var $=require('jquery');
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
    constructor(){
        this.lazyImages=$(".lazyload");
        this.siteHeader =$('.site-header');
        this.headerTriggerElement =$('.large-hero__title');
        this.createHeaderWaypoint();
        this.pageSection=$('.page-section');
        this.headerLink=$('.primary-nav a')
        this.createPageSectionWaypoint();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints(){
        this.lazyImages.on('load',function(){
            Waypoint.refreshAll();
        })
    }

    addSmoothScrolling(){
        this.headerLink.smoothScroll();
    }

    createHeaderWaypoint(){
        var that=this;
        new Waypoint({
            element:this.headerTriggerElement[0],
            handler :function(direction){
                if(direction=="down"){
                    that.siteHeader.addClass('site-header--dark');
                }else{
                    that.siteHeader.removeClass('site-header--dark');
                }
                
            }
        });
    }
    createPageSectionWaypoint(){
        var that=this;
        this.pageSection.each(function(){
            var currentPageSection=this;
                new Waypoint({
                    element:currentPageSection,
                    handler:function(direction){
                        if(direction=="down"){
                            var matchingHeaderLink=currentPageSection.getAttribute('data-matching-link');
                            that.headerLink.removeClass('is-current-link');
                            $(matchingHeaderLink).addClass("is-current-link");
                        }
                    },
                    offset:"22%"
                });
                new Waypoint({
                    element:currentPageSection,
                    handler:function(direction){
                        if(direction=="up"){
                            var matchingHeaderLink=currentPageSection.getAttribute('data-matching-link');
                            that.headerLink.removeClass('is-current-link');
                            $(matchingHeaderLink).addClass("is-current-link");
                        }
                    },
                    offset:"-40%"
                });
        });
    }
}
export default StickyHeader;