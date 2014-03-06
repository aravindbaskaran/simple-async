(function(){
  // Empty function to avoid checking for callbacks
	function EmptyFunction(){}
	/*
	  Constructor for the AsyncIterator
	  array - Array of items to be iterated
	  step - function to be called when stepping
	  start - function to be called when starting the iteration
	  end - function to be called when ending the iteration
	  All functions receive the AsyncIterator instance as the parameter
	*/
	function AsyncIterator(array, step, start, end){
		this.array = array;
		this.currentIndex = -1;
		this.stepFn = step || EmptyFunction;
		this.startFn = start || EmptyFunction;
		this.endFn = end || EmptyFunction;
	}
	/* Is Starting */
	AsyncIterator.prototype.isStarting = function(){
		return this.currentIndex === 0;
	};
	/* is Ending */
	AsyncIterator.prototype.isEnding = function(){
		return this.currentIndex === this.array.length;
	};
	/* Current object in the iteration */
	AsyncIterator.prototype.current = function(){
		return this.array[this.currentIndex];
	};
	/* Size of the iteration */
	AsyncIterator.prototype.size = function(){
		return this.array.length;
	};
	/* Remaining iteration count */
	AsyncIterator.prototype.remaining = function(){
		return this.array.length - this.currentIndex;
	};
	/* Step to the next item, i.e. iterate  */
	AsyncIterator.prototype.step = function(){
		this.currentIndex++;
		if(this.isStarting()){
			this.startFn(this);
		} else if(this.isEnding()){
			this.endFn(this);
			return;
		}
		this.stepFn(this);
	};
	window.AsyncIterator = AsyncIterator;
})();
