// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		bgColor: string;
		color: string;
		type: string;
		primaryText: string;
		spacing: {
			tiny: string;
			small: string;
			base: string;
			large: string;
			xlarge: string;
		}
		fz: {
			micro: string,
			small: string;
			regular: string;
			large: string;
			t3: string;
			t2: string;
			t1: string;
		}
	
	}
}


