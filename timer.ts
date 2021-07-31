namespace $ {

	export class $my_timer extends $mol_object2 {
		timer_id: any
		
		@ $mol_mem
		time( next? : Date ) {
			return next ?? new Date
		}
		
		@ $mol_mem
		period( ms? : number ) {
			return ms ?? 100
		}
		
		start() {
			this.loop()
		}
		
		stop() {
			clearTimeout( this.timer_id )
		}
		
		loop() {
			this.time( new Date() )
			this.timer_id = setTimeout( () => this.loop() , this.period() )
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
