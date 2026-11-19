#include <GL/glut.h>
void plot8(int x,int y){glVertex2i(x,y);glVertex2i(-x,y);glVertex2i(x,-y);glVertex2i(-x,-y);glVertex2i(y,x);glVertex2i(-y,x);glVertex2i(y,-x);glVertex2i(-y,-x);}
void circle(int r){int x=0,y=r,p=1-r;glBegin(GL_POINTS);while(x<=y){plot8(x,y);x++;if(p<0)p+=2*x+1;else{y--;p+=2*(x-y)+1;}}glEnd();}
void display(){glClear(GL_COLOR_BUFFER_BIT);glColor3f(0,0,.8f);circle(150);glFlush();}
int main(int argc,char** argv){glutInit(&argc,argv);glutInitDisplayMode(GLUT_SINGLE|GLUT_RGB);glutInitWindowSize(600,500);glutCreateWindow("Midpoint Circle");glClearColor(1,1,1,1);gluOrtho2D(-300,300,-250,250);glPointSize(2);glutDisplayFunc(display);glutMainLoop();}
