#version 300 es

layout (location = 0) in vec2 position;
uniform vec2 coordLoc;

void main() {
    int vertId = gl_VertexID % 5;
    gl_Position = (vertId == 0) ? vec4(position.x + coordLoc[0], position.y + coordLoc[1], 1.0, 1.0):
        (vertId == 1) ? vec4(position.x - coordLoc[0], position.y + coordLoc[1], 1.0, 1.0)  :
        (vertId == 2) ? vec4(position.x + coordLoc[0], position.y - coordLoc[1], 1.0, 1.0)  :
        (vertId == 3) ? vec4(position.x - coordLoc[0], position.y - coordLoc[1], 1.0, 1.0)  :
        (vertId == 4) ? vec4(position.x - coordLoc[0] + 0.05, position.y - coordLoc[1] - 0.05, 1.0, 1.0)  :
        vec4(position, 0.0, 1.0); 
}