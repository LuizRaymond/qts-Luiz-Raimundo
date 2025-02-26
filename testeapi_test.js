import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Crovis José'
let professores = ['João', 'Lais', 'Davi', 'Nachara']

Deno.test("Teste de assertinons (API)", () => {
    assertEquals(aluno, "Crovis José");
    assertStringIncludes(aluno, "José");
}) 

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Davi", "Lais", "Alan"],
        "Opa! Algo deu errado!");
})