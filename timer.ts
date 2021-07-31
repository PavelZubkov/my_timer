namespace $ {

	export class $my_timer extends $mol_object2 {
		
		@ $mol_mem
		enabled( next? : boolean ) {
			return next ?? false
		}
		
		@ $mol_mem
		time() {
			if ( this.enabled() ) {
				return new Date( $mol_state_time.now( this.period() ) )
			}
			return new Date()
		}
		
		@ $mol_mem
		period( ms? : number ) {
			return ms ?? 100
		}
		
		start() {
			this.enabled( true )
		}
		
		stop() {
			this.enabled( false )
		}
		
	}
	
	export class $my_timer_app extends $mol_object2 {
		@ $mol_mem
		static timer() {
			return new $my_timer
		}

		@ $mol_mem
		static autorun() {
			return $mol_atom2_autorun( ()=> {
				console.log('RENDER')
				return document.getElementById('root')!.innerHTML = this.timer().time().toISOString()
			} )
		}
	}
	
	$my_timer_app.autorun()
}
