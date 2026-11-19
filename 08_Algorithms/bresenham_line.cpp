#include <GL/glut.h>
#include <cstdlib>
void drawLine(int x1,int y1,int x2,int y2){ int dx=abs(x2-x1),dy=abs(y2-y1),sx=x2>=x1?1:-1,sy=y2>=y1?1:-1,x=x1,y=y1; glBegin(GL_POINTS); if(dx>=dy){int p=2*dy-dx;for(int i=0;i<=dx;i++){glVertex2f(x/300.0f,y/250.0f);if(p>=0){y+=sy;p-=2*dx;}x+=sx;p+=2*dy;}}else{int p=2*dx-dy;for(int i=0;i<=dy;i++){glVertex2f(x/300.0f,y/250.0f);if(p>=0){x+=sx;p-=2*dy;}y+=sy;p+=2*dx;}} glEnd();}
void display(){glClear(GL_COLOR_BUFFER_BIT);glColor3f(0,0,0);drawLine(-240,-120,230,160);glFlush();}
int main(int argc,char** argv){glutInit(&argc,argv);glutInitDisplayMode(GLUT_SINGLE|GLUT_RGB);glutInitWindowSize(600,500);glutCreateWindow("Bresenham Line");glClearColor(1,1,1,1);gluOrtho2D(-1,1,-1,1);glPointSize(3);glutDisplayFunc(display);glutMainLoop();}
