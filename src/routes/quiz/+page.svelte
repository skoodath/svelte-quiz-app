<script>
	import Header from '../../components/Header.svelte';
	import Navigation from '../../components/Navigation.svelte';
	import Question from '../../components/Question.svelte'
	
	let question = 'What is the capital of India?';
	let title = 'Quiz App | Quiz';

	let promise;

	const handleClick = () => {
		promise = fetch(
			'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
		).then((x) => x.json());
	};

</script>
<Header heading="Quiz Page" />
<main class="px-8 py-4 w-full max-w-[1200px] flex flex-col justify-center mx-auto">
	<Question>
		<div>
			<p class="flex gap-1">
				<span>Q. </span><span class="font-bold tracking-wide uppercase">{question}</span>
			</p>
		</div>
  <div class="flex flex-col mt-4 gap-2 ml-4">
    <label for="new-delhi"><input type="radio" name="answer" id="new-delhi" value="New Delhi" title="new Delhi" class="mr-2">New Delhi</label>
    <label for="dhaka"><input type="radio" name="answer" id="dhaka" value="Dhaka" class="mr-2">Dhaka</label>
    <label for="chandigarh"><input type="radio" name="answer" id="chandigarh" value="Chandigarh" class="mr-2">Chandigarh</label>
  </div>
	</Question>
	<Navigation />
	<button on:click={handleClick}>Get Data</button>
	{#await promise}
		<p>Loading...</p>
	{:then results}
		{#if results} 
			<pre>
				{JSON.stringify(results ,null, 2)}
			</pre> : null
		{/if}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</main>
<svelte:head>
  <title>{title}</title>
</svelte:head>