import { dia, linkTools } from "jointjs";
import { useDispatch } from "react-redux";
import { increment } from "../actions";
import { eventBus } from "../eventBus";


export function definePaper(paper:dia.Paper,graph:dia.Graph){
    //const dispatch = useDispatch();
    // Register events
paper.on('link:mouseenter', (linkView) => {
    showLinkTools(linkView);
});
paper.on('link:pointerdblclick', (linkView) => {
    console.log(linkView);
});
paper.on('element:pointerdblclick', (f) => {
    eventBus.dispatch("changeData", { message: "coupone applied" });
    console.log(f);
});

paper.on('link:mouseleave', (linkView) => {
    linkView.removeTools();
});
//@ts-ignore
graph.on('change:source change:target', function(link:any) {
    var sourcePort = link.get('source').port;
    var sourceId = link.get('source').id;
    var targetPort = link.get('target').port;
    var targetId = link.get('target').id;

    var paragraph = document.createElement('p');
    paragraph.innerHTML = [
        'The port <b>' + sourcePort,
        '</b> of element with ID <b>' + sourceId,
        '</b> is connected to port <b>' + targetPort,
        '</b> of element with ID <b>' + targetId + '</b>'
    ].join('');
    //console.log(link)
    //appendMessage(paragraph);
});

}


function showLinkTools(linkView:dia.LinkView) {
    var tools = new dia.ToolsView({
        tools: [
            new linkTools.Remove({
                distance: '50%',
                markup: [{
                    tagName: 'circle',
                    selector: 'button',
                    attributes: {
                        'r': 7,
                        'fill': '#f6f6f6',
                        'stroke': '#ff5148',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    }
                }, {
                    tagName: 'path',
                    selector: 'icon',
                    attributes: {
                        'd': 'M -3 -3 3 3 M -3 3 3 -3',
                        'fill': 'none',
                        'stroke': '#ff5148',
                        'stroke-width': 2,
                        'pointer-events': 'none'
                    }
                }]
            })
        ]
    });
    linkView.addTools(tools);
}