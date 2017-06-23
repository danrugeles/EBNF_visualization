

function createButton(context, name,classname,func){
    var button = document.createElement("input");
    button.type = "button";
    button.className=classname;
    button.value = name;
    button.onclick = func;
    context.appendChild(button);
};

function addBr(context){
    var mybr = document.createElement('br');
    context.appendChild(mybr);
};



main= function () {


    var navigate;
    var Top,Dimension,WWW,Query,At,In,activitiesex,timex,people,placesex,spatial_cons,temporal_cons,time,activities,places,Numbers,People_DIM;
    var tagline = document.querySelector("p.tagline");
    var level = 0;
    
     
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
    
    Query = function(){ return { name: ['How Much','How Many'],classname: 'Query', children: Dimension, sibling: WWW }};
    
    
    navigate = function(obj){
        
        //alert('navigate to:  '+JSON.stringify(obj()));
        var childrens=obj().children;
        var classnames=obj().classname;
        
        if (obj===null){return;}
        
        var continuation;
        continuation = function(){
            level+=1;
            $('.'+(level-1)).remove();
            createButton(document.body,this.value,'final',null);
            tagline.innerText = tagline.innerText+' '+this.value;
            addBr(document.body);
            
            navigate(childrens);
        };
        
        for (var a in obj().name){
            createButton(document.body,obj().name[a],level.toString(),continuation);
        }
        
        navigate(obj().sibling);
        
    };
   
    
    navigate(Query);
    

};
