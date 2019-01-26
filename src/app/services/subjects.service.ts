import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  getSubjectData () {

    // Subject data provided in the problem statement

    const subjectData = [{
        'name': 'Mathematics',
        'chapters': [
          {
            'name': 'Fundamental Operations On Integers',
            'topics': [
                        'Subtracting using the number line', 'Addition/subtraction with more than 2 integers',
                        'Additive Identity', 'Multiplicative identity', 'Additive Inverse'
                      ]
          },
          {
            'name': 'Fractions',
            'topics': [
                        'Understand Proper Fractions', 'Understand Improper Fractions',
                        'Conversion of improper fractions to mixed fractions',
                        'Conversion of mixed fractions to improper fractions',
                        'Identify whether the given fractions are equivalent fractions',
                        'Find equivalent fractions for a given fraction by division',
                        'Understand the meaning of the \'simplest form\' of a fraction',
                        'Reduce a given fraction to its simplest form', 'Understand Like and Unlike Fractions'
                      ]
          },
          {
          'name': 'Exponents and Powers',
            'topics': [
                        'Exponential form', 'Definition of constant term', 'Definition of coefficient'
                      ]
          }]
      },
      {
        'name': 'Physics',
        'chapters': [
          {
            'name': 'Kinematics',
            'topics': ['Motion', 'Distance', 'Speed', 'Position and Displacement']
          },
          {
            'name': 'Vectors',
            'topics': ['Scalar', 'Vectors']
          },
          {
            'name': 'Friction',
            'topics': [
                        'Introduction To Friction', 'Methods of Minimising Friction', 'Methods of Increasing Friction',
                        'Types of Forces', 'More About Friction'
                      ]
          }
        ]
      },
      {
        'name': 'Chemistry',
        'chapters': [
          {
            'name': 'Chemical Bonding',
            'topics': ['Ionic Bond', 'Covalent Bond', 'Electron Configurations']
          },
          {
            'name': 'Periodic Classification',
            'topics': ['Periodic Classification', 'Periodic Classification']
          },
          {
            'name': 'Atomic Structure',
            'topics': ['Atom', 'Proton', 'Electron', 'Neutron', 'Orbital Chemistry', 'Valence Electrons']
          },
          {
            'name': 'Language Of Chemistry',
            'topics': ['Chemical Symbols and Formulas', 'Balancing Chemical Equations']
          }
        ]
      }];

    return subjectData;
  }
}
