from flask import Flask, jsonify
import requests
import random

app = Flask(__name__)

@app.route('/random_pokemons')
def get_random_pokemons():
    # Generate 5 random Pokémon IDs
    pokemon_ids = random.sample(range(1, 152), 5)

    pokemons = []
    for pokemon_id in pokemon_ids:
        # Make a request to the Pokémon API to get the Pokémon's main data
        response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{pokemon_id}')
        if response.status_code == 200:
            data = response.json()
            pokemon = {
                'name': data['name'],
                'height': data['height'],
                'weight': data['weight'],
                'base_experience': data['base_experience'],
                'types': [t['type']['name'] for t in data['types']],
            }
            pokemons.append(pokemon)

    return jsonify(pokemons)

@app.route('/pokemon/<name>')
def get_pokemon_by_name(name):
    # Make a request to the Pokémon API to get the Pokémon's data by name
    response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{name}')
    if response.status_code == 200:
        data = response.json()
        pokemon = {
            'name': data['name'],
            'height': data['height'],
            'weight': data['weight'],
            'base_experience': data['base_experience'],
            'types': [t['type']['name'] for t in data['types']],
        }
        return jsonify(pokemon)
    else:
        return jsonify({'error': 'Pokemon not found.'}), 404

if __name__ == '__main__':
    app.run()
