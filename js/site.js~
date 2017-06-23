


/* Creates one Button 
context: simply document.body or the <html tag> where the button must be rendered
name: name of the node(s) that will appear when this button is clicked
classname: Level at which the button resides
func: A function that will return the children nodes of this node if clicked.
*/
function createButton(context, name,classname,func){
    var button = document.createElement("input");
    button.type = "button";
    button.className=classname;
    button.value = name;
    button.onclick = func;
    context.appendChild(button);
};


/*Adds a <br> tag so that next click will render the next level of buttons below*/
function addBr(context){
    var mybr = document.createElement('br');
    context.appendChild(mybr);
};


/*--------------
	Main function
--------------*/

document.addEventListener("DOMContentLoaded", function () {
    /* Engine that renders the nodes as buttons */
    var navigate;
    /* All existent nodes*/
    var Top,Dimension,WWW,Query,At,In,activitiesex,timex,people,placesex,spatial_cons,temporal_cons,time,activities,places,Numbers,People_DIM;
    
    /*Container where the grammar is being written*/
    var tagline = document.querySelector("p.tagline");
    /* Starting level*/
    var level = 0;
    
     
    /* --------------------  The following is the structure of the graph -----------------*/
          /* It is hardcoded since it is meant to be the syntax of a query language */
     
    temporal_cons= function(){ return { name: ['hours=','weekday=','month='],
            classname: 'numbers',
            children: In, 
            sibling: null};
    };

    
    At= function(){return { name: ['at'],
            classname: 'numbers',
            children: temporal_cons, 
            sibling: null }};
    
    spatial_cons= function(){return { name: ['Singapore','USA','Malasya'],
            classname: 'numbers',
            children: At, 
            sibling: null }};
    
    In= function(){return { name: ['in'],
            classname: 'numbers',
            children: spatial_cons, 
            sibling: At }};
    
    activitiesex= function(){return { name: [' ','walk','run','ride vehicle','cycle','sit'],
            classname: 'numbers',
            children: In, 
            sibling: null }};
    
    people= function(){return { name: ['people','females','males'],
            classname: 'numbers',
            children: activitiesex, 
            sibling: null}};
    
    placesex= function(){return { name: [' ','restaurant','bookstore','gym','park'],
            classname: 'numbers',
            children: people, 
            sibling: null }};
    
      
    timex= function(){return { name: ['weekday','month','weekend','hour','day','week'],
            classname: 'numbers',
            children: people, 
            sibling: null }};      
            
            
    time= function(){return { name: ['time='],
            classname: 'numbers',
            children: timex, 
            sibling: people}};

    
    activities= function(){return { name: ['activities'],
            classname: 'numbers',
            children: activitiesex, 
            sibling: time}};
    
    places= function(){return { name: ['places'],
            classname: 'numbers',
            children: placesex, 
            sibling: activities }};
    
    Numbers = function(){return { name: [' ','1','2','3','4','5','6','7','8','9','10'],
            classname: 'numbers',
            children: places, 
            sibling: null }};
            
    Top = function(){return { name: ['Top'],
            classname: 'Query',
            children: Numbers, 
            sibling: null }};
        
    
    WWW = function(){return { name: ['Where','When'],
            classname: 'Query',
            children: people, 
            sibling: Top }};
            
    People_DIM  = function(){return { name: ['People'],
            classname: 'Dimension',
            children: activitiesex, 
            sibling: time }};
          
            
    Dimension = function(){return { name: ['Places'],
            classname: 'Dimension',
            children: people, 
            sibling: People_DIM }};
    
    Query = function(){  return { name: ['How Much','How Many'],classname: 'Query', children: Dimension, sibling: WWW }};
    
    /* -----------------------------------------------------------------------------------------*/
    
    
    /* Engine that renders the nodes as the users clicks on current nodes in the graph*/
    navigate = function(node){
        
        //alert('navigate to:  '+JSON.stringify(node()));
        
        var childrens=node().children;
        var classnames=node().classname;
        
        if (node===null){return;}
   
        var continuation = function(){
            level+=1;
            $('.'+(level-1)).remove();
            createButton(document.body,this.value,'final',function(){});
            tagline.innerText = tagline.innerText+' '+this.value;
            addBr(document.body);
            
            navigate(childrens);
        };
        
        // Render the list of nodes
        for (var a in node().name){
            createButton(document.body,node().name[a],level.toString(),continuation);
        }
        
        // Then renders the list of siblings
        navigate(node().sibling);
        
    };
   
    
    navigate(Query);
    

});















/*Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
   
    for(var i = 0, len = this.length; i < len; i++) {
         alert(i+' remove'+this[i]);
         //this[i].remove();
        if(this[i] && this[i].parentElement) {
            //alert("to remove: "+this[i].value)
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
*/
//document.getElementById("my-element").remove();
//document.getElementsByClassName("my-elements").remove();


