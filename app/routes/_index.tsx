import type { MetaFunction } from "@remix-run/node";
import { Container, Badge, Stack, Text, Flex, Link, Card, CardHeader, CardBody, Blockquote, Button, Checkbox, CodeBlock, H1, H2, Highlight, InlineCode, Input, OL, RadioButton, Select, Switch, Table, Textarea, UL, Alert, AlertHeader, AlertBody, CardFooter, FormField, CheckboxCardGroup, CheckboxCardGroupItem, Footer, FooterColumn, FooterHeading, FooterItem, Modal, Navbar, NavbarLeft, NavbarItem, PasswordInput, Stepper, Tabs, TabSection } from "@adamzerner/rfui-react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [formFieldValue, setFormFieldValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordInputValue, setPasswordInputValue] = useState('');

  return (
    <>
    <Navbar size="lg">
      <NavbarLeft>
        <NavbarItem href="https://one.com">One</NavbarItem>
        <NavbarItem href="https://two.com">Two</NavbarItem>
      </NavbarLeft>
    </Navbar>
    <Container size="lg" className="mt-8 mb-8">
      <Stack style={{ gap: 50 }}>
        <Card>
          <CardHeader>Badge</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Flex className="gap-3 flex-wrap">
                <Badge type="neutral">neutral</Badge>
                <Badge type="info">info</Badge>
                <Badge type="success">success</Badge>
                <Badge type="warning">warning</Badge>
                <Badge type="danger">danger</Badge>
              </Flex>
              <Stack className="gap-5">
                <Flex className="gap-3 flex-wrap">
                  <Badge type="neutral" size="sm">neutral</Badge>
                  <Badge type="info" size="sm">info</Badge>
                  <Badge type="success" size="sm">success</Badge>
                  <Badge type="warning" size="sm">warning</Badge>
                  <Badge type="danger" size="sm">danger</Badge>
                </Flex>
                <Flex className="gap-3 flex-wrap">
                  <Badge type="neutral" size="md">neutral</Badge>
                  <Badge type="info" size="md">info</Badge>
                  <Badge type="success" size="md">success</Badge>
                  <Badge type="warning" size="md">warning</Badge>
                  <Badge type="danger" size="md">danger</Badge>
                </Flex>
                <Flex className="gap-3 flex-wrap">
                  <Badge type="neutral" size="lg">neutral</Badge>
                  <Badge type="info" size="lg">info</Badge>
                  <Badge type="success" size="lg">success</Badge>
                  <Badge type="warning" size="lg">warning</Badge>
                  <Badge type="danger" size="lg">danger</Badge>
                </Flex>
              </Stack>
              <Stack className="gap-5">
                <Flex className="gap-3 flex-wrap">
                  <Badge type="neutral" rounded="square">neutral</Badge>
                  <Badge type="info" rounded="square">info</Badge>
                  <Badge type="success" rounded="square">success</Badge>
                  <Badge type="warning" rounded="square">warning</Badge>
                  <Badge type="danger" rounded="square">danger</Badge>
                </Flex>
                <Flex className="gap-3 flex-wrap">
                  <Badge type="neutral" rounded="sm">neutral</Badge>
                  <Badge type="info" rounded="sm">info</Badge>
                  <Badge type="success" rounded="sm">success</Badge>
                  <Badge type="warning" rounded="sm">warning</Badge>
                  <Badge type="danger" rounded="sm">danger</Badge>
                </Flex>
                <Flex className="gap-3 flex-wrap">
                  <Badge type="neutral" rounded="lg">neutral</Badge>
                  <Badge type="info" rounded="lg">info</Badge>
                  <Badge type="success" rounded="lg">success</Badge>
                  <Badge type="warning" rounded="lg">warning</Badge>
                  <Badge type="danger" rounded="lg">danger</Badge>
                </Flex>
                <Flex className="gap-3 flex-wrap">
                  <Badge type="neutral" rounded="full">neutral</Badge>
                  <Badge type="info" rounded="full">info</Badge>
                  <Badge type="success" rounded="full">success</Badge>
                  <Badge type="warning" rounded="full">warning</Badge>
                  <Badge type="danger" rounded="full">danger</Badge>
                </Flex>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Blockquote</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Blockquote>All models are wrong. Some are useful.</Blockquote>
              <Blockquote className="gap-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut
                  lectus arcu bibendum at varius vel. Volutpat sed cras ornare arcu dui
                  vivamus arcu felis.
                </p>
                <p>
                  Non consectetur a erat nam at lectus urna. Tristique sollicitudin nibh
                  sit amet commodo nulla. Scelerisque eu ultrices vitae auctor. Ipsum
                  dolor sit amet consectetur adipiscing elit pellentesque habitant.
                  Augue lacus viverra vitae congue eu consequat ac felis.
                </p>
                <p>
                  Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.
                  A lacus vestibulum sed arcu non.
                </p>
                <p>
                  Volutpat odio facilisis mauris sit amet massa. Sit amet nisl suscipit
                  adipiscing bibendum leo.
                </p>
                <p>
                  Risus nec feugiat in fermentum. Nisi vitae suscipit tellus mauris a
                  diam maecenas. Morbi tincidunt augue interdum velit euismod in
                  pellentesque massa. Volutpat ac tincidunt vitae semper. Sit amet nisl
                  purus in mollis.
                </p>
              </Blockquote>
              <Blockquote cite="https://example.com">
                <p>All models are wrong. Some are useful.</p>
                <footer>
                  —Someone, <cite>Somewhere</cite>
                </footer>
              </Blockquote>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Button</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Button>Example</Button>
              <Button
                onClick={() => {
                  console.log('clicked');
                } }>
                Click me
              </Button>
              <Flex className="gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
              </Flex>
              <Flex className="gap-3">
                <Button variant="danger-primary">Primary</Button>
                <Button variant="danger-secondary">Secondary</Button>
                <Button variant="danger-tertiary">Tertiary</Button>
              </Flex>
              <Stack className="gap-5">
                <Flex className="gap-3">
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="tertiary" size="sm">Tertiary</Button>
                </Flex>
                <Flex className="gap-3">
                  <Button variant="primary" size="md">Primary</Button>
                  <Button variant="secondary" size="md">Secondary</Button>
                  <Button variant="tertiary" size="md">Tertiary</Button>
                </Flex>
                <Flex className="gap-3">
                  <Button variant="primary" size="lg">Primary</Button>
                  <Button variant="secondary" size="lg">Secondary</Button>
                  <Button variant="tertiary" size="lg">Tertiary</Button>
                </Flex>
                <Stack className="gap-3 w-full">
                  <Button variant="primary" size="block">Primary</Button>
                  <Button variant="secondary" size="block">Secondary</Button>
                </Stack>
              </Stack>
              <Stack className="gap-5">
                <Flex className="gap-3">
                  <Button variant="primary" rounded="square">Primary</Button>
                  <Button variant="secondary" rounded="square">Secondary</Button>
                  <Button variant="tertiary" rounded="square">Tertiary</Button>
                </Flex>
                <Flex className="gap-3">
                  <Button variant="primary" rounded="sm">Primary</Button>
                  <Button variant="secondary" rounded="sm">Secondary</Button>
                  <Button variant="tertiary" rounded="sm">Tertiary</Button>
                </Flex>
                <Flex className="gap-3">
                  <Button variant="primary" rounded="lg">Primary</Button>
                  <Button variant="secondary" rounded="lg">Secondary</Button>
                  <Button variant="tertiary" rounded="lg">Tertiary</Button>
                </Flex>
                <Flex className="gap-3">
                  <Button variant="primary" rounded="full">Primary</Button>
                  <Button variant="secondary" rounded="full">Secondary</Button>
                  <Button variant="tertiary" rounded="full">Tertiary</Button>
                </Flex>
              </Stack>
              <Flex className="gap-3">
                <Button disabled variant="primary">Primary</Button>
                <Button disabled variant="secondary">Secondary</Button>
                <Button disabled variant="tertiary">Tertiary</Button>
              </Flex>
              <Flex className="gap-3">
                <Button variant="primary" isLoading loadingContent="Loading...">
                  Primary
                </Button>
                <Button variant="secondary" isLoading loadingContent="Loading...">
                  Secondary
                </Button>
                <Button variant="tertiary" isLoading loadingContent="Loading...">
                  Tertiary
                </Button>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Checkbox</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Checkbox />
              <Checkbox checked={isCheckboxChecked} onChange={() => {
                setIsCheckboxChecked((v) => !v);
              } } />
              <Stack className="gap-5">
                <Checkbox size="sm" />
                <Checkbox size="md" />
                <Checkbox size="lg" />
              </Stack>
              <Checkbox disabled />
              <Checkbox invalid />
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>CodeBlock</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <CodeBlock code={`console.log("Hello world");`} />
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>H1</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <H1>Hello world</H1>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>H2</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <H2>Hello world</H2>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Highlight</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <div>
                The <Highlight>pizza</Highlight> is very good.
              </div>
              <div>
                <h1>
                  Lorem ipsum <Highlight>dolor</Highlight> sit amet, consectetur.
                </h1>
                <div>
                  Lorem ipsum{" "}
                  <Highlight>dolor sit amet</Highlight>, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.{" "}
                  <Highlight>Duis aute irure</Highlight>{" "}
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>InlineCode</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <div>
                When I wrote <InlineCode>{`sayHello("John")`}</InlineCode> it didnt work.
              </div>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Input</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Input />
              <Input value={inputValue} onChange={(e) => { setInputValue(e.target.value); } } />
              <Stack className="gap-5 w-fit">
                <Input size="sm" />
                <Input size="md" />
                <Input size="lg" />
              </Stack>
              <Stack className="gap-5 w-fit">
                <Input rounded="square" />
                <Input rounded="sm" />
                <Input rounded="lg" />
                <Input rounded="full" />
              </Stack>
              <Input disabled />
              <Input readOnly value="example" />
              <Input invalid value="example" />
              <Stack className="gap-5">
                <Input type="text" placeholder="text" />
                <Input type="email" placeholder="email" />
                <Input type="text" inputMode="numeric" pattern="[0-9]*" />
                <Input type="number" />
                <Input type="password" value="foobar" />
                <Input type="date" />
                <Input type="datetime-local" />
                <Input type="time" />
                <Input type="file" />
                <Input type="range" />
                <Input type="color" />
              </Stack>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Link</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Link href="https://example.com">Example</Link>
              <Flex className="gap-3">
                <Link underline="always" href="https://example.com">always</Link>
                <Link underline="hover" href="https://example.com">hover</Link>
                <Link underline="none" href="https://example.com">none</Link>
              </Flex>
              <Link inPageLink underline="hover" href="#section">Example</Link>
              <Stack className="gap-8">
                <Stack className="gap-5">
                  <Link _newTab href="https://example.com" underline="always">
                    _newTab
                  </Link>
                  <Link _newTab href="https://example.com" underline="hover">
                    _newTab
                  </Link>
                  <Link _newTab href="https://example.com" underline="none">
                    _newTab
                  </Link>
                </Stack>
                <Stack className="gap-5">
                  <Link
                    _newTab
                    _includeNewTabIcon
                    href="https://example.com"
                    underline="always"
                  >
                    _includeNewTabIcon
                  </Link>
                  <Link
                    _newTab
                    _includeNewTabIcon
                    href="https://example.com"
                    underline="hover"
                  >
                    _includeNewTabIcon
                  </Link>
                  <Link
                    _newTab
                    _includeNewTabIcon
                    href="https://example.com"
                    underline="none"
                  >
                    _includeNewTabIcon
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>OL</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <OL>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
              </OL>
              <OL bulletLocation="outside">
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
              </OL>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>RadioButton</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <RadioButton />
              <Stack className="gap-5">
                <RadioButton size="sm" />
                <RadioButton size="md" />
                <RadioButton size="lg" />
              </Stack>
              <RadioButton disabled />
              <RadioButton invalid />
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Select</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Select>
                <option value="foo">foo</option>
                <option value="bar">bar</option>
                <option value="baz">baz</option>
              </Select>
              <Select value={selectValue} onChange={(e) => {
                setSelectValue(e.target.value);
              } }>
                <option value="foo">foo</option>
                <option value="bar">bar</option>
                <option value="baz">baz</option>
              </Select>
              <Stack className="gap-5 w-fit">
                <Select size="sm">
                  <option value="foo">foo</option>
                  <option value="bar">bar</option>
                  <option value="baz">baz</option>
                </Select>
                <Select size="md">
                  <option value="foo">foo</option>
                  <option value="bar">bar</option>
                  <option value="baz">baz</option>
                </Select>
                <Select size="lg">
                  <option value="foo">foo</option>
                  <option value="bar">bar</option>
                  <option value="baz">baz</option>
                </Select>
              </Stack>
              <Stack className="gap-5 w-fit">
                <Select rounded="square">
                  <option value="foo">foo</option>
                  <option value="bar">bar</option>
                  <option value="baz">baz</option>
                </Select>
                <Select rounded="sm">
                  <option value="foo">foo</option>
                  <option value="bar">bar</option>
                  <option value="baz">baz</option>
                </Select>
                <Select rounded="lg">
                  <option value="foo">foo</option>
                  <option value="bar">bar</option>
                  <option value="baz">baz</option>
                </Select>
              </Stack>
              <Select disabled>
                <option value="foo">foo</option>
                <option value="bar">bar</option>
                <option value="baz">baz</option>
              </Select>
              <Select invalid>
                <option value="foo">foo</option>
                <option value="bar">bar</option>
                <option value="baz">baz</option>
              </Select>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Switch</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Switch />
              <Switch checked={isSwitchChecked} onChange={() => {
                setIsSwitchChecked((v) => !v);
              } } />
              <Switch disabled />
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Table</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Table>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered={false}>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </Table>
              <Table hover={false}>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </Table>
              <Table striped bordered={false}>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Carol</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td>Dave</td>
                    <td>34</td>
                  </tr>
                </tbody>
              </Table>
              <Table striped>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Carol</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td>Dave</td>
                    <td>34</td>
                  </tr>
                </tbody>
              </Table>
              <Table stickyHeader>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </Table>
              <Table stickyFirstColumn>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </Table>
              <Table stickyHeader stickyFirstColumn>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </Table>
              <Table condensed>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </Table>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Text</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
                  odio facilisis mauris sit.
                </p>
                <p>
                  Amet consectetur adipiscing elit duis tristique. Ac turpis egestas
                  maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue
                  quisque egestas diam in.
                </p>
              </Text>
              <Text size="sm">
                <p>
                  Illo quia quam perferendis ut consectetur rerum dolores dolores.
                  Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
                  consectetur non amet nostrum quo animi.
                </p>
                <p>
                  Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
                  Praesentium pariatur nisi ut rerum et dolores sed.
                </p>
              </Text>
              <Text size="md">
                <p>
                  Illo quia quam perferendis ut consectetur rerum dolores dolores.
                  Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
                  consectetur non amet nostrum quo animi.
                </p>
                <p>
                  Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
                  Praesentium pariatur nisi ut rerum et dolores sed.
                </p>
              </Text>
              <Text size="lg">
                <p>
                  Illo quia quam perferendis ut consectetur rerum dolores dolores.
                  Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
                  consectetur non amet nostrum quo animi.
                </p>
                <p>
                  Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
                  Praesentium pariatur nisi ut rerum et dolores sed.
                </p>
              </Text>
              <Text>
                Illo quia quam perferendis ut consectetur rerum dolores dolores.
                Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
                consectetur non amet nostrum quo animi.
              </Text>
              <Text>
                <p>
                  Illo quia quam perferendis ut consectetur{" "}
                  <Link href="https://example.com">rerum dolores</Link>{" "}
                  dolores. Reiciendis est beatae magnam ut amet quis sequi. Eaque
                  consequatur consectetur non amet nostrum quo animi.
                </p>
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Textarea</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Textarea></Textarea>
              <Textarea value={textareaValue} onChange={(e) => {
                setTextareaValue(e.target.value);
              } }></Textarea>
              <Stack className="gap-5">
                <Textarea rounded="square"></Textarea>
                <Textarea rounded="sm"></Textarea>
                <Textarea rounded="lg"></Textarea>
              </Stack>
              <Textarea disabled></Textarea>
              <Textarea readOnly>Example</Textarea>
              <Textarea invalid>Example</Textarea>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>UL</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <UL>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
              </UL>
              <Stack className="gap-5">
                <UL bulletType="bullet">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="check">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="arrow">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="triangle">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="none">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
              </Stack>
              <Stack className="gap-5">
                <UL bulletLocation="outside" bulletType="bullet">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletLocation="outside" bulletType="check">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletLocation="outside" bulletType="arrow">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletLocation="outside" bulletType="triangle">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
              </Stack>
              <Stack className="gap-5">
                <UL bulletType="bullet" className="text-xl">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="check" className="text-xl">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="arrow" className="text-xl">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="triangle" className="text-xl">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
              </Stack>
              <Stack className="gap-5">
                <UL bulletType="bullet" className="text-neutral-500">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="check" className="text-neutral-500">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="arrow" className="text-neutral-500">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
                <UL bulletType="triangle" className="text-neutral-500">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </UL>
              </Stack>
              <UL bulletType="none">
                <li>
                  <Flex className="gap-2">
                    <span>😎</span>
                    One
                  </Flex>
                </li>
                <li>
                  <Flex className="gap-2">
                    <span>😎</span>
                    Two
                  </Flex>
                </li>
                <li>
                  <Flex className="gap-2">
                    <span>😎</span>
                    Three
                  </Flex>
                </li>
              </UL>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Alert</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Alert>Example</Alert>
              <Alert>
                <AlertHeader>Success</AlertHeader>
                <AlertBody>Your profile has been saved.</AlertBody>
              </Alert>
              <Stack className="gap-5 w-full">
                <Alert variant="success">
                  <AlertHeader>Success</AlertHeader>
                  <AlertBody>Your profile has been saved.</AlertBody>
                </Alert>
                <Alert variant="info">
                  <AlertHeader>Note</AlertHeader>
                  <AlertBody>Your account has been updated.</AlertBody>
                </Alert>
                <Alert variant="warning">
                  <AlertHeader>Warning</AlertHeader>
                  <AlertBody>Your plan is set to expire.</AlertBody>
                </Alert>
                <Alert variant="danger">
                  <AlertHeader>Danger</AlertHeader>
                  <AlertBody>Your payment method is inactive.</AlertBody>
                </Alert>
                <Alert variant="neutral">
                  <AlertHeader>Note</AlertHeader>
                  <AlertBody>Your account has been updated.</AlertBody>
                </Alert>
              </Stack>
              <Stack className="gap-5 w-full">
                <Alert isDismissable={false} variant="success">
                  <AlertHeader>Success</AlertHeader>
                  <AlertBody>Your profile has been saved.</AlertBody>
                </Alert>
                <Alert isDismissable={false} variant="info">
                  <AlertHeader>Note</AlertHeader>
                  <AlertBody>Your account has been updated.</AlertBody>
                </Alert>
                <Alert isDismissable={false} variant="warning">
                  <AlertHeader>Warning</AlertHeader>
                  <AlertBody>Your plan is set to expire.</AlertBody>
                </Alert>
                <Alert isDismissable={false} variant="danger">
                  <AlertHeader>Danger</AlertHeader>
                  <AlertBody>Your payment method is inactive.</AlertBody>
                </Alert>
                <Alert isDismissable={false} variant="neutral">
                  <AlertHeader>Note</AlertHeader>
                  <AlertBody>Your account has been updated.</AlertBody>
                </Alert>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Card</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Card>Example</Card>
              <Card>
                <CardBody>A summary of your account.</CardBody>
              </Card>
              <Card>
                <CardHeader>Summary</CardHeader>
                <CardBody>A summary of your account.</CardBody>
              </Card>
              <Card>
                <CardBody>A summary of your account.</CardBody>
                <CardFooter>
                  <Button>Close</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>Summary</CardHeader>
                <CardBody>A summary of your account.</CardBody>
                <CardFooter>
                  <Button>Close</Button>
                </CardFooter>
              </Card>
              <Stack className="gap-5">
                <Card rounded="square">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
                <Card rounded="sm">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
                <Card rounded="lg">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
              </Stack>
              <Stack className="gap-5">
                <Card width="sm">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
                <Card width="md">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
                <Card width="lg">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
                <Card width="full">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
              </Stack>
              <Stack className="gap-5">
                <Card shadow="sm">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
                <Card shadow="md">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
                <Card shadow="lg">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
              </Stack>
              <Stack className="gap-5">
                <Card padding="sm">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
                <Card padding="md">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
                <Card padding="lg">
                  <CardHeader>Summary</CardHeader>
                  <CardBody>A summary of your account.</CardBody>
                  <CardFooter>
                    <Button>Close</Button>
                  </CardFooter>
                </Card>
              </Stack>
              <Card>
                <CardHeader>
                  <h1 className="font-bold tracking-wide text-neutral-700">Profile</h1>
                </CardHeader>
                <CardBody>
                  <div className="text-neutral-700 mb-6">
                    Please fill out the following information.
                  </div>
                  <Stack className="gap-3">
                    <FormField label="Name" type="text" />
                    <FormField label="Email" type="email" />
                    <FormField label="Age" type="number" />
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Flex className="gap-2">
                    <Button variant="primary">Submit</Button>
                    <Button>Cancel</Button>
                  </Flex>
                </CardFooter>
              </Card>
              <Card topAccent rounded="square">
                <CardHeader>
                  <h1 className="font-bold tracking-wide text-neutral-700">Profile</h1>
                </CardHeader>
                <CardBody>
                  <div className="text-neutral-700 mb-6">
                    Please fill out the following information.
                  </div>
                  <Stack className="gap-3">
                    <FormField label="Name" type="text" />
                    <FormField label="Email" type="email" />
                    <FormField label="Age" type="number" />
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Flex className="gap-2">
                    <Button variant="primary">Submit</Button>
                    <Button>Cancel</Button>
                  </Flex>
                </CardFooter>
              </Card>
              <Card leftAccent rounded="square">
                <CardHeader>
                  <h1 className="font-bold tracking-wide text-neutral-700">Profile</h1>
                </CardHeader>
                <CardBody>
                  <div className="text-neutral-700 mb-6">
                    Please fill out the following information.
                  </div>
                  <Stack className="gap-3">
                    <FormField label="Name" type="text" />
                    <FormField label="Email" type="email" />
                    <FormField label="Age" type="number" />
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Flex className="gap-2">
                    <Button variant="primary">Submit</Button>
                    <Button>Cancel</Button>
                  </Flex>
                </CardFooter>
              </Card>
              <Link href="https://example.com">
                <Card className="pointer-events-none">
                  <CardBody>
                    Click to visit example.com
                  </CardBody>
                </Card>
              </Link>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>CheckboxCardGroup</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <CheckboxCardGroup>
                <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
                <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
                <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
              </CheckboxCardGroup>
              <CheckboxCardGroup>
                <CheckboxCardGroupItem checkboxRest={{ name: "one" }}>
                  One
                </CheckboxCardGroupItem>
                <CheckboxCardGroupItem checkboxRest={{ name: "two" }}>
                  Two
                </CheckboxCardGroupItem>
                <CheckboxCardGroupItem checkboxRest={{ name: "three" }}>
                  Three
                </CheckboxCardGroupItem>
              </CheckboxCardGroup>
              <Stack className="gap-5">
                <CheckboxCardGroup padding="sm">
                  <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
                </CheckboxCardGroup>
                <CheckboxCardGroup padding="md">
                  <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
                </CheckboxCardGroup>
                <CheckboxCardGroup padding="lg">
                  <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
                </CheckboxCardGroup>
              </Stack>
              <Stack className="gap-5">
                <CheckboxCardGroup rounded="square">
                  <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
                </CheckboxCardGroup>
                <CheckboxCardGroup rounded="sm">
                  <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
                </CheckboxCardGroup>
                <CheckboxCardGroup rounded="lg">
                  <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
                  <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
                </CheckboxCardGroup>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>FormField</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <FormField label="Name" />
              <FormField label="Name" value={formFieldValue} inputRest={{ onChange: (e) => {
                setFormFieldValue((e.target as HTMLInputElement).value);
              } }} />
              <FormField label="Name" helperText="Your first and last name" />
              <FormField label="Name" invalid />
              <FormField label="Name" invalid errorText="Invalid name" />
              <FormField
                label="Name"
                helperText="Your first and last name"
                invalid
                errorText="Invalid name"
              />
              <Stack className="gap-5">
                <FormField
                  label="Name"
                  required
                  requiredIndicator="text"
                />
                <FormField
                  label="Name"
                  required
                  requiredIndicator="asterisk"
                />
              </Stack>
              <Stack className="gap-5">
                <FormField
                  label="Name"
                  optionalIndicator="text"
                />
                <FormField
                  label="Name"
                  optionalIndicator="asterisk"
                />
              </Stack>
              <Stack className="gap-5">
                <FormField
                  label="Name"
                  size="sm"
                  required
                  requiredIndicator="text"
                  helperText="First and last name"
                />
                <FormField
                  label="Name"
                  size="md"
                  required
                  requiredIndicator="text"
                  helperText="First and last name"
                />
                <FormField
                  label="Name"
                  size="lg"
                  required
                  requiredIndicator="text"
                  helperText="First and last name"
                />
              </Stack>
              <Stack className="gap-5">
                <FormField
                  label="Name on card"
                  type="text"
                  className="w-14 max-w-full"
                />
                <FormField
                  label="Card number"
                  type="text"
                  className="w-14 max-w-full"
                />
                <FormField
                  label="Expiry date"
                  type="text"
                  className="w-10"
                />
                <FormField
                  label="CVC"
                  type="text"
                  className="w-10"
                />
              </Stack>
              <Stack className="gap-5">
                <FormField label="Name" type="text" />
                <FormField label="Email" type="email" />
                <FormField label="Age" type="number" />
                <FormField label="Password" type="password" value="foobar" />
                <FormField label="Birthday" type="date" />
                <FormField label="Appointment" type="datetime-local" />
                <FormField label="Bed time" type="time" />
                <FormField label="Profile photo" type="file" />
                <FormField label="Mood" type="range" />
                <FormField label="Favorite color" type="color" />
              </Stack>
              <FormField label="Agreed" type="checkbox" />
              <FormField label="Free" type="radio" />
              <FormField label="Password" type="rfui-password-input" value="foobar" />
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Modal</CardHeader>
          <CardBody>
            <Button onClick={() => { setIsModalOpen(true); }}>Open modal</Button>
            <Modal 
              isOpen={isModalOpen} 
              close={() => {
                setIsModalOpen(false);
              }} 
              heading="Heading">
              Example
            </Modal>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>PasswordInput</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <PasswordInput />
              <PasswordInput value={passwordInputValue} onChange={(e) => {
                setPasswordInputValue(e.target.value);
              }} />
              <PasswordInput defaultVisibility="shown" />
              <Stack className="gap-5">
                <PasswordInput size="sm" />
                <PasswordInput size="md" />
                <PasswordInput size="lg" />
              </Stack>
              <Stack className="gap-5">
                <PasswordInput rounded="square" />
                <PasswordInput rounded="sm" />
                <PasswordInput rounded="lg" />
                <PasswordInput rounded="full" />
              </Stack>
              <PasswordInput invalid />
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Stepper</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Stepper />
              <Stack className="gap-5">
                <Stepper size="sm" />
                <Stepper size="md" />
                <Stepper size="lg" />
              </Stack>
              <Stack className="gap-5">
                <Stepper rounded="square" />
                <Stepper rounded="sm" />
                <Stepper rounded="lg" />
                <Stepper rounded="full" />
              </Stack>
              <Stepper startingValue={100} />
              <Stepper min={0} max={5} />
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Tabs</CardHeader>
          <CardBody>
            <Stack style={{ gap: 50 }}>
              <Tabs>
                <TabSection tabName="First">One</TabSection>
                <TabSection tabName="Second">Two</TabSection>
                <TabSection tabName="Third">Three</TabSection>
              </Tabs>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Container>
    <Footer size="lg">
      <FooterColumn>
        <FooterHeading>About</FooterHeading>
        <FooterItem href="/about">About</FooterItem>
        <FooterItem href="/philosophy">Philosophy</FooterItem>
        <FooterItem href="https://github.com/users/adamzerner/projects/2">
          Roadmap
        </FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Docs</FooterHeading>
        <FooterItem href="/">Components</FooterItem>
        <FooterItem href="/getting-started">Getting started</FooterItem>
        <FooterItem href="/tutorial">Tutorial</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Code</FooterHeading>
        <FooterItem href="https://github.com/adamzerner/rfui">
          GitHub
        </FooterItem>
        <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CHANGELOG.md">
          Changelog
        </FooterItem>
        <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CONTRIBUTING.md">
          Contributing
        </FooterItem>
        <FooterItem href="https://github.com/adamzerner/rfui/blob/master/LICENSE">
          License
        </FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Help</FooterHeading>
        <FooterItem href="mailto:adamzerner@protonmail.com">
          Contact
        </FooterItem>
        <FooterItem href="/faq">FAQ</FooterItem>
      </FooterColumn>
    </Footer>
  </>
  );
}
