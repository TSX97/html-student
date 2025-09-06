#include <iostream>
#include <iomanip>
#include "my_math.h"

using namespace std;

int main(){

	cout << fixed << setprecision(16);

	for(int n = 0; n < 20; n++){
		cout << n << "! / !" << n << " = " << math::get_eyler(n) << endl;
	}
	return 0;
}
