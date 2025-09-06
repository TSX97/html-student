#include "my_math.h"

namespace math {
	int add(int a, int b){
		return a + b;
	}

	int sub(int a, int b){
		return a - b;
	}
	
	long long factorial(long long n){
		
		if(n <= 1) return 1;
		return n * factorial(n - 1);	
	}

	long long subfactorial(long long n){
		
		if(n == 0) return 1;
		if(n == 1) return 0;

		long long a = 1;
		long long b = 0;
		long long temp;
		
		for(int i = 2; i <= n; i++){
			temp = (i - 1) * (a + b);
			a = b;
			b = temp;
		}
		return b;
	}
	
	long double get_eyler(int n){
		
		return static_cast<long double>(factorial(n)) / static_cast<long double>(subfactorial(n));
	}
}
