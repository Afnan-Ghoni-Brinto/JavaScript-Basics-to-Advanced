#include <GL/glut.h>
#include <cmath>
void drawDDA(float x1,float y1,float x2,float y2){ float dx=x2-x1,dy=y2-y1; int steps=(int)fmax(fabs(dx),fabs(dy)); if(steps==0){glBegin(GL_POINTS);glVertex2f(x1,y1);glEnd();return;} float xi=dx/steps,yi=dy/steps,x=x1,y=y1; glBegin(GL_POINTS); for(int i=0;i<=steps;i++){glVertex2f(x,y);x+=xi;y+=yi;} glEnd(); }
void display(){ glClear(GL_COLOR_BUFFER_BIT); glColor3f(0,0,0); drawDDA(-.8f,-.5f,.8f,.6f); glFlush(); }
int main(int argc,char** argv){ glutInit(&argc,argv); glutInitDisplayMode(GLUT_SINGLE|GLUT_RGB); glutInitWindowSize(700,500); glutCreateWindow("DDA Line"); glClearColor(1,1,1,1); gluOrtho2D(-1,1,-1,1); glPointSize(3); glutDisplayFunc(display); glutMainLoop(); }
